import confetti from "canvas-confetti";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import useStore from "../Store/store";
import abi from "../utils/ABI.json";
import { CONTRACT_ADDRESS } from "../utils/utils";
import blogImg from "../Assets/blogBanner.jpg"
const BlogPage = () => {
    const store = useStore();
    const { id } = useParams();
    const detailBlogs = store.detailBlogs;
    console.log(detailBlogs)
    const ABI = abi.abi;
    const sendTip = async (owner, e) => {
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
                console.log("hi");
                console.log();
                const tipTxn = await DeBlog.tipToOwner(detailBlogs[id].blogOwner, { value: ethers.utils.parseEther("0.01") });
                await tipTxn.wait();
                const msg = document.getElementsByClassName("confetiScren")[0];
                msg.classList.remove("hidden")
                confetti(
                    {
                        particleCount: 480,
                        startVelocity: 30,
                        spread: 360,
                        origin: {
                            x: Math.random(),
                            // since they fall down, start a bit higher than random
                            y: Math.random() - 0.2
                        }
                    }
                )
                setTimeout(() => {
                    msg.classList.add("hidden")
                }, 1000);
                console.log("mined ", tipTxn.hash);
                console.log("tip send");
            }
        } catch (error) {
            console.log(error);
        }
    }
    if (detailBlogs != '') {
        return (
            <>
                <div className="hidden confetiScren fixed h-48 w-2/5  my-96 rounded-xl p-10 text-5xl text-center bg-slate-300">
                    Thanks For Your Tip
                </div>
                <div className="bg-[#ffffff] w-screen flex-1 overflow-y-scroll Scroll px-10">
                    <div className="flex justify-between">
                    <button className="bg-red-100 px-4 py-2 rounded-lg mt-2 " onClick={() => window.history.back()}>Go Back</button>
                    <button className="bg-red-100 px-4 py-2 rounded-lg mt-2 " onClick={sendTip}>Tip The Writer</button>
                    </div>
                    <ProfileBar detailBlogs={detailBlogs} id={id} />
                    <div className="mt-8">
                        <h2 className="text-6xl font-bold">{detailBlogs[id].blogTitle}</h2>
                        <h3 className="text-4xl mt-8 font-semibold text-[#757575]">{detailBlogs[id].subTitle}</h3>
                        <img src={detailBlogs[id].coverImage} className="mt-12 w-screen h-auto" alt="body-img" />
                        <div className="mt-8 text-xl">
                            <p>{detailBlogs[id].blogContent}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    else {
        return <h1>Loading</h1>
    }

}
export default BlogPage