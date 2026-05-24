import { StatusShowcasePanel } from "@/components/sidebar";

export function Sidebar() {
  return (
    <aside
      className="profile-sidebar-col max-lg:order-first lg:sticky lg:top-[var(--profile-sidebar-top)] lg:z-10 lg:h-fit lg:max-h-[calc(100vh-var(--profile-sidebar-top)-8px)] lg:self-start lg:overflow-y-auto"
      aria-label="AI portfolio highlights"
    >
      <StatusShowcasePanel />
    </aside>
  );
}
