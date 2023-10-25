export interface SidenavItem {
  title: string
  path: string[]
  icon?: string
}

export interface SidenavSection {
  heading: string
  expanded: boolean
  children: SidenavItem[]
}
