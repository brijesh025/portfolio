import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Brijesh Singh",
  description:
    "Get in touch with Brijesh Singh for web development projects, collaborations, or inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
