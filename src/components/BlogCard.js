import confetti from "canvas-confetti";
import { useEffect } from "react";
import useStore from "../Store/store";
import logo from "../Assets/DeBlog-logos_black.png"

export default function BlogCard({ blogdata, index }) {
  // console.log(blogdata);
  useEffect(() => {

  }, [])
  const store = useStore();
  const currentAccount = store.currentAccount.slice(38);
  return (
    <div className='max-h-full min-h-[364px] w-96 shadow-xl flex flex-col rounded-xl p-4 overflow-hidden hover:bg-[hsla(0,0%,100%,.1)] hover:transition-all hover:delay-7'>
      <div className="w-full">
        <img src={blogdata.coverImage} className='h-36 w-full rounded-xl'/>
      </div>
      <div className='h-full pt-4 pr-8 text-black flex-1 flex flex-col justify-start items-start'>
        <div className="self-start text-2xl font-medium">{blogdata.blogTitle}</div>
        <div className='text-lg my-2 font-Three'>{blogdata.subTitle}</div>
        <h4 className='text-xl text-[#4b4b4b]' >By {blogdata.blogOwner.slice(0, 4) + "..." + blogdata.blogOwner.slice(blogdata.blogOwner.length - 4, blogdata.blogOwner.length)}
        </h4>
      </div>
    </div>
  )
}