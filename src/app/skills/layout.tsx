"use client";

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Global CSS for the skills page */}
      <style jsx global>{`
        :root {
          --color-primary-rgb: 220, 38, 38; /* Tailwind red-600 */
        }

        .floating-skills {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: -1;
        }

        .skill-bubble {
          position: absolute;
          border-radius: 50%;
          z-index: -1;
        }
      `}</style>

      {children}
    </>
  );
}
