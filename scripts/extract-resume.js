// Simple PDF -> JSON extractor for the resume page
// Heuristic parser tailored for common resume structures

const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

const PDF_PATH = path.resolve(__dirname, "../public/assets/resume.pdf");
const OUT_JSON_PATH = path.resolve(__dirname, "../public/assets/resume.json");

function cleanLine(s) {
  return s.replace(/\s+/g, " ").trim();
}

function splitLines(text) {
  return text
    .split(/\r?\n/)
    .map((l) => cleanLine(l))
    .filter((l) => l.length > 0);
}

function indexOfHeading(lines, headings) {
  const lower = lines.map((l) => l.toLowerCase());
  for (let i = 0; i < lower.length; i++) {
    for (const h of headings) {
      if (lower[i] === h || lower[i].startsWith(h + " ")) return i;
    }
  }
  return -1;
}

function isDateRange(line) {
  // Examples: May 2024 - Jul 2024, 2021 - Present, Jan 2022 – Mar 2023
  return /\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)?\.?\s?\d{4}\s?[–-]\s?(?:present|\d{4}|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\.?\s?\d{4})/i.test(
    line
  );
}

function extractHeader(lines) {
  const header = {};
  if (lines.length) header.full_name = lines[0];
  if (lines.length > 1) header.title = lines[1];

  // Email, phone, links search in first ~10 lines
  const contactLines = lines.slice(0, 10).join(" ");
  const email = contactLines.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  const phone = contactLines.match(/(?:\+?\d[\d\s-]{7,}\d)/);
  const links = contactLines.match(/https?:\/\/\S+/g) || [];
  if (email) header.email = email[0];
  if (phone) header.phone = phone[0];
  if (links.length) header.links = Array.from(new Set(links));
  return header;
}

function extractSection(lines, startIdx, endIdx) {
  if (startIdx < 0) return [];
  const slice = lines.slice(startIdx + 1, endIdx > 0 ? endIdx : undefined);
  return slice;
}

function parseExperience(sectionLines) {
  const out = [];
  let i = 0;
  while (i < sectionLines.length) {
    // Identify blocks by date range lines
    if (isDateRange(sectionLines[i])) {
      const period = sectionLines[i];
      // Role and company likely in previous or next few lines
      let role = "";
      let company = "";

      // Look backwards for role/company
      if (i - 1 >= 0) {
        const prev = sectionLines[i - 1];
        if (prev) {
          // Try split by at/ - /, etc
          if (/ at /i.test(prev)) {
            const [r, c] = prev.split(/ at /i);
            role = cleanLine(r);
            company = cleanLine(c);
          } else if (/ - /.test(prev)) {
            const [a, b] = prev.split(/ - /);
            // Heuristic: longer token is role
            if (a.length >= b.length) {
              role = cleanLine(a);
              company = cleanLine(b);
            } else {
              role = cleanLine(b);
              company = cleanLine(a);
            }
          } else {
            role = prev;
          }
        }
      }

      // Look forward for bullets until next date range or blank separation
      const bullets = [];
      let j = i + 1;
      while (j < sectionLines.length && !isDateRange(sectionLines[j])) {
        const line = sectionLines[j];
        if (/^[•\-\u2022]/.test(line)) {
          bullets.push(cleanLine(line.replace(/^[•\-\u2022]\s?/, "")));
        } else if (line.length > 0) {
          // Consider as bullet text continuation
          if (bullets.length === 0) {
            // Might be company line if still missing
            if (!company && /^(?:at|@)\s+/i.test(line)) {
              company = cleanLine(line.replace(/^(?:at|@)\s+/i, ""));
            } else if (!company && /[,|] /.test(line)) {
              // try split
              const parts = line.split(/[,|] /);
              company = cleanLine(parts[0]);
            } else {
              bullets.push(line);
            }
          } else {
            bullets[bullets.length - 1] += " " + line;
          }
        }
        j++;
      }

      out.push({ role: role || "", company: company || "", period, bullets });
      i = j;
      continue;
    }
    i++;
  }
  return out;
}

function parseEducation(sectionLines) {
  const out = [];
  let i = 0;
  while (i < sectionLines.length) {
    // Try to detect blocks by date range
    if (isDateRange(sectionLines[i])) {
      const period = sectionLines[i];
      const title = sectionLines[i - 1] || ""; // degree
      const institution = sectionLines[i - 2] || ""; // institution
      let description = "";
      let j = i + 1;
      while (j < sectionLines.length && !isDateRange(sectionLines[j])) {
        const line = sectionLines[j];
        if (/^[•\-\u2022]/.test(line)) {
          description +=
            (description ? " " : "") + line.replace(/^[•\-\u2022]\s?/, "");
        } else if (line.length > 0) {
          description += (description ? " " : "") + line;
        }
        j++;
      }
      out.push({
        degree: title,
        institution,
        period,
        description: description || undefined,
      });
      i = j;
      continue;
    }
    i++;
  }
  return out;
}

function parseSkills(sectionLines) {
  // Collect comma or bullet-separated tokens
  const blob = sectionLines.join(", ");
  const tokens = blob
    .split(/[,•\u2022\n]/)
    .map((t) => cleanLine(t))
    .filter((t) => t && t.length > 1 && !/skills/i.test(t));
  // Deduplicate
  const names = Array.from(new Set(tokens));
  // Provide default levels since PDF doesn't contain percentages
  return names.slice(0, 50).map((name) => ({ name, level: 80 }));
}

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    console.error("PDF not found at:", PDF_PATH);
    process.exit(1);
  }
  const dataBuffer = fs.readFileSync(PDF_PATH);
  const result = await pdf(dataBuffer);
  const text = result.text || "";
  const lines = splitLines(text);

  const header = extractHeader(lines);

  // Find sections
  const expIdx = indexOfHeading(lines, ["work experience", "experience"]);
  const eduIdx = indexOfHeading(lines, ["education", "academics"]);
  const skillsIdx = indexOfHeading(lines, [
    "skills",
    "technical skills",
    "skills & tools",
    "skills and tools",
  ]);

  const afterExp =
    eduIdx > -1 ? eduIdx : skillsIdx > -1 ? skillsIdx : lines.length;
  const afterEdu = skillsIdx > -1 ? skillsIdx : lines.length;

  const expLines = extractSection(lines, expIdx, afterExp);
  const eduLines = extractSection(lines, eduIdx, afterEdu);
  const skillLines = extractSection(lines, skillsIdx, -1);

  const experience = parseExperience(expLines);
  const education = parseEducation(eduLines);
  const skills = parseSkills(skillLines);

  // Summary: take text between title and first section heading
  const firstSection =
    [expIdx, eduIdx, skillsIdx]
      .filter((i) => i > -1)
      .sort((a, b) => a - b)[0] ?? lines.length;
  const summaryLines = lines
    .slice(2, firstSection)
    .filter((l) => !/^\w+\s*:$/.test(l));
  const summary = summaryLines.join(" ");

  const out = {
    header,
    summary: summary || undefined,
    experience,
    education,
    skills,
  };

  fs.writeFileSync(OUT_JSON_PATH, JSON.stringify(out, null, 2), "utf-8");
  console.log("Wrote:", OUT_JSON_PATH);
  console.log(
    "Experience:",
    experience.length,
    "items; Education:",
    education.length,
    "items; Skills:",
    skills.length,
    "items"
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
