import { ReactNode } from 'react'

export interface User {
  name: string
}
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

export interface Career {
  id: number | null
  title: string
  content: string
  created_datetime: string | null
  username: string
}

export interface AddCareer {
  title: string
  content: string
  username: string
}

export interface CareersGridProp {
  careers: Career[]
}
export interface CareerCardProp {
  data: Career
}