import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Brijesh Singh",
  description:
    "Learn more about Brijesh Singh - Full Stack Developer specializing in web technologies and real-time applications",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
