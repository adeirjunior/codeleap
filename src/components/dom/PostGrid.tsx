import React from 'react'
import posts from '../../data/posts'
import PostCard from './PostCard'
import { PostCardData, PostCardProp, PostGridProp } from '../../interfaces'



export default function PostGrid({ careers }: PostGridProp) {

  return (
    <div className="grid grid-cols-1 gap-5">
      {careers.map((career) => (
        <PostCard key={career.id} data={career} />
      ))}
    </div>
  )
}