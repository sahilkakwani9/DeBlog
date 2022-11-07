import { Bookmarks, FacebookLogo, LinkedInLogo, TwitterLogo } from "../Assets/Icons.js"

function ProfileBar({detailBlogs, id}) {
  return (
    <div className='flex items-center mt-12'>
      <img src="	https://miro.medium.com/fit/c/96/96/0*I2F8PIdog1pkSr8i.jpg" className='rounded-full h-14 w-14 mr-4' alt="" />
      <div className='justify-between w-screen items-center flex'>
        <div className=''>
          <h5 className='font-bold'>{detailBlogs[id].authorName}</h5>
          <div className='flex font-semibold'>
            <p>Jun 27</p>
            <p className='ml-4'>11 min read</p>
          </div>
        </div>
        <div className='flex items-center'>
          <TwitterLogo />
          <FacebookLogo />
          <LinkedInLogo />
          <div className='ml-8'>
            <Bookmarks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBar