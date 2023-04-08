import PostGrid from '../components/dom/PostGrid'
import Form from '../components/dom/Form'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Form />
      <Suspense fallback="Loading...">
        <PostGrid />
      </Suspense>
    </>
  )
}
