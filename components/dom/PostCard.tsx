import Delete from '../svgs/Delete'
import Edit from '../svgs/Edit'

interface PostCardData {
  title: string;
  content: string;
  created_datetime: string;
  username: string;
}
interface PostCardProp {
  data: PostCardData
}
export default function PostCard({ data }: PostCardProp) {
  const { title, content, created_datetime, username }: PostCardData = data

  return (
    <div className="border-[#999999] border rounded-2xl overflow-hidden">
      <div className="bg-primary-color flex justify-between px-4 py-4 items-center">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <div className="flex">
          <button
            title="Delete Button"
            type="button"
            className="mr-2 sm:mr-6 cursor-pointer"
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
          <p className="text-[#777777] ">{created_datetime}</p>
        </div>
        <p>{content}</p>
      </div>
    </div>
  )
}
