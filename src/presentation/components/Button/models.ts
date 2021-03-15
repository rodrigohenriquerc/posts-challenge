export interface IButton {
  title: string
  type?: ButtonType
  onClick: () => void
}

export type ButtonType = 'normal' | 'ghost'
