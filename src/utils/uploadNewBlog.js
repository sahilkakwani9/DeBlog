import { ethers } from "ethers";
import abi from "./ABI.json";
import { CONTRACT_ADDRESS } from "./utils";
const ABI = abi.abi;
const uploadNewBlog = async (blogId, blogtitle, subTitle, authorName, blofContent) => {
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
            DeBlog.newBlog(blogId, blogtitle, subTitle, authorName, blofContent);
        }
    } catch (error) {
        console.log(error);
    }
}
export default uploadNewBlog;