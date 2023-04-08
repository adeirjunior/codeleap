import { ReactNode } from 'react'

export interface svgIconsProps {
  className?: string
}
export interface ContainerProps {
  children: ReactNode;
}
export interface KeydownEvent {
  charCode: number;
  keyCode: number;
}