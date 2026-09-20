import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

function icon(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  }
}

export function IconCloud(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M17.5 19a4.5 4.5 0 0 0 .4-9 7 7 0 0 0-13.4 1.6A4.5 4.5 0 0 0 6.5 19Z" />
    </svg>
  )
}

export function IconServer(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <circle cx="7" cy="7.5" r="0.8" fill="currentColor" />
      <circle cx="7" cy="16.5" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function IconBoxes(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M7 7 12 4l5 3v6l-5 3-5-3Z" />
      <path d="M12 10v6" />
      <path d="m7 7 5 3 5-3" />
    </svg>
  )
}

export function IconWorkflow(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
      <path d="M12 13v2" />
    </svg>
  )
}

export function IconTerminal(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m8 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  )
}

export function IconUser(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19a7 7 0 0 1 14 0" />
    </svg>
  )
}

export function IconBuilding(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9 14h.01" />
      <path d="M15 14h.01" />
    </svg>
  )
}

export function IconCode(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
    </svg>
  )
}

export function IconGit(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M8 7h8" />
      <path d="M12 8v8" />
    </svg>
  )
}

export function IconActivity(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M3 12h4l2.5-7 5 14 2.5-7H21" />
    </svg>
  )
}

export function IconShield(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.4 7 9 4.2-1.6 7-4.8 7-9V6Z" />
    </svg>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function IconMail(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function IconPin(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconLinkedin(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function IconArrowDown(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  )
}

export function IconSend(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="m4 12 16-8-6 18-2.5-7.5Z" />
    </svg>
  )
}

export function IconAward(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13-1.5 8 5-2.5L17 21l-1.5-8" />
    </svg>
  )
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 19a4.5 4.5 0 0 0 5-4.2" />
    </svg>
  )
}

export function IconStar(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <path d="M12 3.2 14.4 8.7l6 .6-4.6 4 1.4 5.8L12 16.6 6.8 19.1l1.4-5.8-4.6-4 6-.6Z" />
    </svg>
  )
}

export function IconZap(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M13 2 4 14h8l-1 8 9-12h-8Z" />
    </svg>
  )
}

export function IconCreditCard(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

export function IconMonitor(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  )
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function IconEye(props: IconProps) {
  return (
    <svg {...icon({ strokeWidth: 2, ...props })}>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export const skillIcons = [
  IconCloud,
  IconServer,
  IconBoxes,
  IconWorkflow,
  IconTerminal,
  IconCode,
  IconGit,
  IconActivity,
  IconShield,
] as const

export const highlightIcons = [IconAward, IconCloud, IconBoxes] as const
export const aboutIcons = [IconCloud, IconBoxes, IconWorkflow, IconShield] as const
export const achievementIcons = [IconAward, IconServer, IconCloud, IconZap] as const
export const competencyIcons = [
  IconCloud,
  IconBoxes,
  IconWorkflow,
  IconTerminal,
  IconActivity,
  IconShield,
] as const
export const projectIcons = [IconCreditCard, IconMonitor] as const
export const contactIcons = [IconPhone, IconMail, IconPin, IconLinkedin] as const
