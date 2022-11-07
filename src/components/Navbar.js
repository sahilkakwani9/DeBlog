import useStore from "../Store/store";
import logo from "../Assets/DeBlog-logos_black.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const store = useStore();
  const currentAccount = store.currentAccount.slice(38);
  const setWriteBlog = store.setWriteBlog;
  const writeBlog = store.writeBlog;
  return (
    <div className="bg-white h-16 w-full px-8 sticky top-0 shadow-lg shadow-indigo-500/40">
      <div className="flex items-center justify-between h-full text-neutral-400 text-base font-medium">
        <Link to={'/'}>
          <div>
            <img src={logo} alt="DeBlog" className="h-44 w-auto" />
          </div>
        </Link>
        <ul className="flex items-center">
          <li className="text-gray-700">
            <a onClick={() => { setWriteBlog(true) }} className="mr-8">
              <span className="pl-4 mx-4 cursor-pointer">Write your Blog</span>
            </a>
          </li>
          <button className="rounded-full bg-slate-200 hover:scale-105 px-8 py-3 text-black">
            💳{" "}
            {currentAccount
              ? currentAccount.slice(0, 4) +
              "..." +
              currentAccount.slice(currentAccount.length - 4, currentAccount.length)
              : "Connect"}
          </button>
        </ul>
      </div>
    </div>
  );
}
