import { ReactNode } from 'react'

export interface IButton {
  title: string
  type?: ButtonType
  icon?: ReactNode
  onClick: () => void
}

export type ButtonType = 'normal' | 'ghost'
