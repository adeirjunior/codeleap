import React from 'react'
import posts from '../../data/posts'
import PostCard from './PostCard'

export default function PostGrid() {
  return (
    <div className="grid grid-cols-1 gap-5">
      {posts.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  )
}
