import { ReactNode } from 'react'

export interface svgIconsProps {
  className?: string
}
export interface ContainerProps {
  children: ReactNode
}
export interface KeydownEvent {
  charCode: number
  keyCode: number
}
export interface PostCardData {
  id: number
  title: string
  content: string
  created_datetime: string
  username: string
}
export interface PostGridProp {
  careers: PostCardData[]
}
export interface PostCardProp {
  data: PostCardData
}