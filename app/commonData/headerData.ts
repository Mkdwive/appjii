export interface NavLinkItem {
  id: number;
  label: string;
  href: string;
}

export const navigationLinks: NavLinkItem[] = [
  { id: 1, label: "Inbox", href: "#inbox-section" },
  { id: 2, label: "AI Features", href: "#ai-feature-section" },
  { id: 3, label: "How It Works", href: "#how-it-work-section" },
  { id: 4, label: "Use Cases", href: "#use-cases-section" },
];
