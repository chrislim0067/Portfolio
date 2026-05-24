export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
