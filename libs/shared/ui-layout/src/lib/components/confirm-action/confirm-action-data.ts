import {ThemePalette} from '@angular/material/core'

export interface ConfirmActionData {
  title: string
  infos: string[]
  icon?: string
}

export interface ConfirmActionDataInjected extends ConfirmActionData {
  color?: ThemePalette
}
