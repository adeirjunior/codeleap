import Delete from '../svgs/Delete'
import Edit from '../svgs/Edit'
import { CareerCardProp, Career } from '../../interfaces'
import { useDispatch } from "react-redux"
import React, { useState, useEffect } from 'react'
import { deleteCareer } from '../../actions'
import { AppDispatch } from '../../redux/store'


export default function CareerCard({ data }: CareerCardProp) {
  const { id, title, content, created_datetime, username }: Career = data
  const dispatch: AppDispatch = useDispatch()
  const dateOld = new Date(created_datetime)
  const [now, setNow] = useState(new Date())

  const handleClick = (id: number) => {
    dispatch(deleteCareer(id))
  }

  function diffHour(timeAgo: Date): number {
    const agora: Date = new Date()
    const diferenca: number = agora.getTime() - timeAgo.getTime()
    return diferenca
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  function timeAgo(dateOld: Date): string {
    const diferenca: number = diffHour(dateOld)
  
    const seconds: number = Math.floor(diferenca / 1000)
    const minutes: number = Math.floor(seconds / 60)
    const hours: number = Math.floor(minutes / 60)
    const days: number = Math.floor(hours / 24)
    const weeks: number = Math.floor(days / 7)
    const months: number = Math.floor(weeks / 4.34524)
    const year: number = Math.floor(months / 12)
  
    if (year > 0) {
      return year === 1 ? "1 year ago" : year + " years ago"
    } else if (months > 0) {
      return months === 1 ? "1 month ago" : months + " months ago"
    } else if (weeks > 0) {
      return weeks === 1 ? "1 week ago" : weeks + " weeks ago"
    } else if (days > 0) {
      return days === 1 ? "1 day ago" : days + " days ago"
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : hours + " hours ago"
    } else if (minutes >= 1) {
      return minutes === 1 ? "1 minute ago" : minutes + " minutes ago"
    } else {
      return "some seconds ago"
    }
  }
  
  return (
    <div className="border-[#999999] border rounded-2xl overflow-hidden">
      <div className="bg-primary-color flex justify-between px-4 py-4 items-center">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <div className="flex">
          <button
            title="Delete Button"
            type="button"
            className="mr-2 sm:mr-6 cursor-pointer"
            onClick={() => handleClick(id)}
          >
            <Delete />
          </button>
          <button title="Edit Button" type="button" className="cursor-pointer">
            <Edit />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <p className="text-[#777777] font-bold">{`@${username}`}</p>
          <p className="text-[#777777] ">{timeAgo(dateOld)}</p>
        </div>
        <p>{content}</p>
      </div>
    </div>
  )
}