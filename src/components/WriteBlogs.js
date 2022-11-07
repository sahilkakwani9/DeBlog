import { ethers } from 'ethers';
import { useEffect, useRef, useState } from 'react';
import { Web3Storage } from "web3.storage";
import logo from '../Assets/DeBlog-logos_black.png';
import abi from "../utils/ABI.json";
import storeFiles from '../utils/uploadImage';
import { CONTRACT_ADDRESS } from "../utils/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function WriteBlogs(props) {
  const ref = useRef(null);
  const { onClickOutside } = props;
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState("");
  const [image, setImage] = useState(undefined);
  const [localImageLink, setLocalImageLink] = useState("");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);
  if (!props.show) {
    return null
  }
  const ABI = abi.abi;
  const Token = process.env.TOKEN;
  const handleImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setLocalImageLink(URL.createObjectURL(e.target.files[0]));
    }
  }

  const uploadNewBlog = async (e) => {
    const ToastContainer = toast.loading("Uploading Image to IPFS...");
    const URI = await storeFiles(image);
    toast.update(ToastContainer, {
      render: "Image uploaded to IPFS",
      type: "success",
      isLoading: false,
    });
    console.log(URI);
    e.preventDefault();
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const DeBlog = new ethers.Contract(
          CONTRACT_ADDRESS,
          ABI,
          signer
        );
        await DeBlog.newBlog(Math.round(Math.random() * 1000000), title, subTitle, authorName, content, URI);
        console.log("blog uploaded");
        toast.update(ToastContainer, {
          render: "Blog uploaded",
          type: "success",
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div ref={ref} className='absolute top-10 left-40 font-9xl rounded-xl w-4/6 h-auto bg-white shadow-xl'>
        <div className='flex justify-between px-12 py-4'>
          <div className='mt-4 h-fit items-center flex justify-between w-full'>
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80" className='rounded-full h-14 w-14 mr-4 object-cover' alt="" />
            <button className='bg-green-500 rounded-xl h-fit mr-8 text-white font-semibold px-3 py-2'
              onClick={uploadNewBlog}
            >Publish</button>
          </div>
        </div>
        <div className='px-12 w-full'>
          <div className='block mb-4'>
            <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1' placeholder='This is why Users dont like long Addresses'>Cover Image</label>
            <input type="file" onChange={handleImage} className='border-black border-2 rounded-md w-full h-12 p-2' />
            <img src={localImageLink} className='w-3/5 mt-2 rounded-lg' />
          </div>
          <div className='block mb-4'>
            <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1' placeholder='This is why Users dont like long Addresses'>Author</label>
            <input type="text" onChange={event => setAuthorName(event.target.value)} className='border-blue-500 border-2 rounded-md w-full h-12 p-2' />
          </div>
          <div className='block mb-4'>
            <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1'>Title</label>
            <input type="text" onChange={event => setTitle(event.target.value)} className='border-blue-500 border-2 rounded-md w-full h-12 p-2' />
          </div>
          <div className='block mb-4'>
            <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1'>Subtitle</label>
            <input type="text" onChange={event => setSubTitle(event.target.value)} className='border-blue-500 border-2 rounded-md w-full h-12 p-2' />
          </div>
          <div className='block mb-4'>
            <label htmlFor="" className='block text-2xl text-[#413f3f] font-Two mb-1'>Content</label>
            <textarea type="text" onChange={event => setContent(event.target.value)} className='border-blue-500 border-2 rounded-md w-full h-48 p-2' />
          </div>
        </div>
      </div>
    </>
  )
}

export default WriteBlogs