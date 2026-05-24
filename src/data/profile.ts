export const profile = {
  name: "Chris Lim",
  pronouns: "He/Him",
  headline:
    "Staff AI/ML Engineer & Full-Stack Engineer | LLM, RAG & Cloud AI · NUS MSc",
  location: "Queenstown, Singapore",
  connections: "500+",
  email: "chris.limjh@gmail.com",
  github: "https://github.com/chriskiel",
  linkedin: "https://www.linkedin.com/in/chris-kiel-804659106/",
  avatar: "/profile.png",
} as const;

export const about = {
  summary: `Staff AI/ML Engineer and Full-Stack Engineer with 10+ years of experience designing, building, and deploying production-grade AI systems across fintech, SaaS, and enterprise environments. Specialized in LLM-powered applications, RAG pipelines, multi-agent architectures, and scalable cloud-native AI platforms on AWS, Azure, and GCP.

Proven track record in AI automation, distributed systems, MLOps, inference optimization, and full-stack development, delivering high-throughput data and inference pipelines with measurable business impact. Adept at mentoring teams, leading architecture initiatives, and implementing AI solutions that improve operational efficiency, reliability, and performance at scale.`,
} as const;

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Connect", href: profile.linkedin },
  { label: "Projects", href: "#projects" },
  { label: "Messaging", href: "#" },
  { label: "Experience", href: "#experience" },
] as const;
