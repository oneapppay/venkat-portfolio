export const profile = {
  name: "Venkat Yanapothula",
  firstName: "Venkat",
  lastName: "Yanapothula",
  initials: "VY",
  title: "DevOps Lead Engineer",
  organization: "Virtusa Corp - Chase Banking Solutions",
  phone: "+1 380-284-9218",
  phoneHref: "tel:+13802849218",
  email: "ops.venkat@gmail.com",
  emailHref: "mailto:ops.venkat@gmail.com",
  linkedin: "https://www.linkedin.com/in/venkat-yanapothula/",
  linkedinLabel: "linkedin.com/in/venkat-yanapothula",
  summary:
    "12+ years in DevOps, cloud infrastructure, enterprise automation, CI/CD, Kubernetes, and platform operations.",
  about:
    "I design and operate cloud platforms across AWS and Azure, with reusable infrastructure as code, Kubernetes delivery, and CI/CD that keeps enterprise systems observable, recoverable, and cost-aware.",
}

export const navLinks = [
  { href: "home", label: "home" },
  { href: "skills", label: "skills" },
  { href: "about", label: "about" },
  { href: "experience", label: "experience" },
  { href: "projects", label: "projects" },
  { href: "services", label: "services" },
  { href: "contact", label: "contact" },
] as const

export const expertiseTopics = [
  "AWS and Azure cloud infrastructure",
  "Terraform, CloudFormation, and ARM templates",
  "Kubernetes, EKS, AKS, and Helm",
  "Docker and multi-stage image builds",
  "Jenkins, GitLab CI/CD, Azure DevOps, and GitHub Actions",
  "Ansible, Puppet, Linux, RHEL, and Ubuntu",
  "Python, Bash, Groovy, and PowerShell",
  "IAM, RBAC, and Secrets Manager",
  "CloudWatch, CloudTrail, Azure Monitor, and Splunk",
  "Incident response, disaster recovery, and cost optimization",
] as const

export const contactTiles = [
  { id: "phone", label: "Phone", value: "+1 380-284-9218", href: "tel:+13802849218" },
  { id: "email", label: "Email", value: "ops.venkat@gmail.com", href: "mailto:ops.venkat@gmail.com" },
  { id: "location", label: "Location", value: "Virtusa Corp - Chase Banking Solutions", href: "" },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/venkat-yanapothula",
    href: "https://www.linkedin.com/in/venkat-yanapothula/",
  },
] as const

export const highlightTiles = [
  { metric: "12+", label: "Years Experience" },
  { metric: "AWS & Azure", label: "Cloud Platforms" },
  { metric: "K8s & CI/CD", label: "Platform Delivery" },
] as const

export const skillCategories = [
  {
    id: "cloud",
    title: "Cloud platforms",
    featured: true,
    skills: ["AWS", "Azure"],
  },
  {
    id: "iac",
    title: "Infrastructure as code",
    featured: false,
    skills: ["Terraform", "CloudFormation", "ARM templates"],
  },
  {
    id: "kubernetes",
    title: "Kubernetes & containers",
    featured: false,
    skills: ["Kubernetes", "EKS", "AKS", "Helm", "Docker"],
  },
  {
    id: "cicd",
    title: "CI/CD",
    featured: false,
    skills: ["Jenkins", "GitLab CI/CD", "Azure DevOps", "GitHub Actions", "GoCD"],
  },
  {
    id: "config",
    title: "Configuration & OS",
    featured: false,
    skills: ["Ansible", "Puppet", "Linux", "RHEL", "Ubuntu"],
  },
  {
    id: "scripting",
    title: "Languages & scripting",
    featured: false,
    skills: ["Python", "Bash", "Groovy", "PowerShell"],
  },
  {
    id: "supply",
    title: "Source & supply chain",
    featured: false,
    skills: ["Git", "Bitbucket", "SonarQube", "Trivy", "Artifactory"],
  },
  {
    id: "observe",
    title: "Observability",
    featured: false,
    skills: ["CloudWatch", "CloudTrail", "Azure Monitor", "Splunk"],
  },
  {
    id: "ops",
    title: "Identity & operations",
    featured: false,
    skills: ["IAM", "RBAC", "incident response", "disaster recovery", "cloud cost optimization"],
  },
] as const

export const focusAreas = [
  {
    kicker: "IaC",
    title: "Terraform",
    copy: "Reusable modules and isolated environments for AWS and Azure.",
  },
  {
    kicker: "K8s",
    title: "Kubernetes",
    copy: "EKS, AKS, Helm, and container delivery for platform work.",
  },
  {
    kicker: "CI/CD",
    title: "Automation",
    copy: "Jenkins, GitLab, Azure DevOps, and GitHub Actions pipelines.",
  },
] as const

export const aboutHighlights = [
  {
    title: "Cloud infrastructure",
    description:
      "AWS and Azure estates with Terraform, CloudFormation, and ARM templates.",
  },
  {
    title: "Kubernetes platforms",
    description:
      "EKS and AKS delivery with Helm, Docker, IRSA, and deployment gates.",
  },
  {
    title: "CI/CD automation",
    description:
      "Jenkins, GitLab CI/CD, Azure DevOps, GitHub Actions, and GoCD pipelines.",
  },
  {
    title: "Operations discipline",
    description:
      "IAM, RBAC, monitoring, incident response, disaster recovery, and cost optimization.",
  },
] as const

export const achievements = [
  { metric: "12+", label: "Years Experience" },
  { metric: "20+", label: "Services on EKS" },
  { metric: "30+", label: "EC2 Instances" },
  { metric: "40%+", label: "Smaller Images" },
] as const

export const experience = [
  {
    org: "CHASE",
    context: "GBP 1.0 Global Banking Platform",
    place: "Plano, Texas",
    summary:
      "AWS infrastructure with reusable Terraform modules and isolated environments. Delivery through GitLab and Jenkins; EKS and Helm deployments with Karpenter. IAM, CloudTrail, RDS performance work, Secrets Manager rotation, and CloudWatch monitoring. Python and Bash automation for incident response, disaster recovery, and cost optimization.",
    points: [
      "Reusable Terraform modules and separate environments",
      "GitLab and Jenkins pipelines; EKS, Helm, and Karpenter",
      "IAM, CloudTrail, Secrets Manager rotation, and CloudWatch",
      "RDS performance, incident response, disaster recovery, and cost optimization",
    ],
  },
  {
    org: "CITI",
    context: "",
    place: "",
    summary:
      "Azure infrastructure with Terraform and ARM templates. Azure DevOps and GitHub Actions for delivery. AKS, App Services, and Functions behind Entra ID, Key Vault, private networking, monitoring, backup, disaster recovery, and security controls.",
    points: [
      "Azure infrastructure with Terraform and ARM templates",
      "Azure DevOps and GitHub Actions",
      "AKS, App Services, and Functions",
      "Entra ID, Key Vault, private networking, backup, and disaster recovery",
    ],
  },
  {
    org: "Lexmark & Xerox",
    context: "",
    place: "",
    summary:
      "Jenkins and Groovy pipelines with SonarQube and Artifactory. GitHub migration and branching, plus Ansible, Docker, Kubernetes, CloudFormation, CloudWatch, and Splunk.",
    points: [
      "Jenkins and Groovy pipelines",
      "SonarQube quality gates and Artifactory",
      "GitHub migration and branching",
      "Ansible, Docker, Kubernetes, CloudFormation, CloudWatch, and Splunk",
    ],
  },
  {
    org: "IBM",
    context: "",
    place: "",
    summary:
      "Migrated GoCD to Jenkins and Puppet to Ansible. Integrated HashiCorp Vault and automated pipeline configuration, certificate management, AWS infrastructure, and Kubernetes operations.",
    points: [
      "Migrated GoCD to Jenkins",
      "Migrated Puppet to Ansible",
      "HashiCorp Vault integration",
      "Automated pipeline configuration, certificates, AWS, and Kubernetes operations",
    ],
  },
] as const

export const projects = [
  {
    name: "CHASE Pay in 4 (Pi4)",
    company: "Virtusa Corp - Chase Banking",
    period: "July 2025 - Present",
    summaries: [
      "Working on Chase Pay in 4 (Pi4), a digital lending and payment solution that allows eligible Chase customers to convert qualifying debit card purchases into four scheduled payments through Chase digital banking channels.",
      "Supporting the engineering and release lifecycle of highly available banking applications while ensuring secure, reliable, and seamless customer experiences across Chase.com and the Chase Mobile App.",
    ],
    points: [
      "Supporting end-to-end Release Engineering activities for Chase Pay in 4 applications and microservices",
      "Coordinating application deployments across development, testing, staging, and production environments",
      "Deploying and orchestrating microservices using Kubernetes",
      "Creating and managing Kubernetes namespaces, services, deployments, configurations, and application connectivity",
      "Supporting CI/CD pipelines and automated deployment processes",
      "Performing release readiness checks, deployment validation, smoke testing, and post-production verification",
      "Troubleshooting deployment and application issues across distributed environments",
      "Partnering with Application Development, SRE, Infrastructure, QA, and Production Support teams",
      "Monitoring application performance and production health during and after releases",
      "Driving automation to improve deployment reliability, release consistency, and operational efficiency",
    ],
    tags: [
      "Java 21",
      "Spring Boot",
      "Kubernetes",
      "AWS",
      "PCF",
      "Jenkins",
      "Git",
      "CI/CD",
      "Dynatrace",
      "Splunk",
    ],
  },
  {
    name: "Digital Mission Control (DMC)",
    company: "Virtusa Corp - Chase Banking",
    period: "July 2025 - Present",
    summaries: [
      "Digital Mission Control (DMC) focuses on maintaining the reliability and availability of critical digital banking experiences across Chase.com and Chase Mobile applications.",
      "The primary objective is to proactively identify, triage, and mitigate production issues with minimal customer impact, helping ensure customers can securely access digital banking services 24/7.",
    ],
    points: [
      "Monitoring production applications and critical customer journeys across Chase.com, Android, and iOS platforms",
      "Supporting high-priority production incidents affecting digital banking application flows",
      "Performing rapid incident triage, troubleshooting, mitigation, and service restoration",
      "Improving Mean Time to Resolution (MTTR) for major production incidents",
      "Monitoring application health, infrastructure metrics, logs, transactions, and service dependencies using multiple observability platforms",
      "Building and enhancing monitoring dashboards to quickly identify production anomalies and customer-impacting issues",
      "Analyzing alerts and optimizing thresholds to reduce unnecessary and noisy production alerts",
      "Collaborating continuously with SRE, Release Engineering (RE/L2), Application Development, Infrastructure, and Operations teams",
      "Supporting production deployments, release validations, rollback activities, and post-release monitoring",
      "Identifying automation opportunities for repetitive operational and release engineering activities",
      "Performing root-cause analysis and contributing to long-term production stability improvements",
      "Developing deep domain expertise across critical Chase digital banking customer flows",
      "Ensuring high availability, reliability, performance, and an excellent digital banking customer experience",
    ],
    tags: [
      "Kubernetes",
      "AWS",
      "PCF",
      "Jenkins",
      "CI/CD",
      "Dynatrace",
      "Splunk",
      "Production Support",
      "SRE",
      "Release Engineering",
      "Incident Management",
      "Monitoring & Observability",
    ],
  },
] as const

export const competencies = [
  {
    title: "Cloud infrastructure",
    description:
      "AWS and Azure estates designed with reusable infrastructure as code and isolated environments.",
    features: ["AWS", "Azure", "Terraform", "CloudFormation", "ARM templates"],
  },
  {
    title: "Kubernetes platforms",
    description:
      "Cluster delivery and packaging for enterprise services on EKS and AKS.",
    features: ["Kubernetes", "EKS", "AKS", "Helm", "Docker"],
  },
  {
    title: "CI/CD systems",
    description:
      "Pipelines that move change through quality gates and into production with a clear audit trail.",
    features: ["Jenkins", "GitLab CI/CD", "Azure DevOps", "GitHub Actions", "GoCD"],
  },
  {
    title: "Configuration & OS",
    description:
      "Fleet setup and Linux operations that turn hours of instance work into repeatable playbooks.",
    features: ["Ansible", "Puppet", "Linux", "RHEL", "Ubuntu"],
  },
  {
    title: "Observability",
    description:
      "Signals that explain the platform: logs, trails, and monitors used in day-to-day operations.",
    features: ["CloudWatch", "CloudTrail", "Azure Monitor", "Splunk"],
  },
  {
    title: "Security & operations",
    description:
      "Access control, recovery planning, and cost discipline for production platforms.",
    features: ["IAM", "RBAC", "incident response", "disaster recovery", "cost optimization"],
  },
] as const

export const education = [
  {
    credential: "MBA",
    school: "Jawaharlal Nehru Technological University, Anantapur, India",
    year: "2013",
    score: "75%",
  },
  {
    credential: "Bachelor of Computer Applications",
    school: "SVU, Tirupathi",
    year: "2011",
    score: "75%",
  },
  {
    credential: "Intermediate",
    school: "Board of Intermediate Education",
    year: "2008",
    score: "85%",
  },
  {
    credential: "SSC",
    school: "Board of Secondary Education",
    year: "2006",
    score: "81%",
  },
] as const
