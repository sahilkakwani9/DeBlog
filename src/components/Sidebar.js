import { Home, Search, SpotifyLogoFull, YLibrary } from "../Assets/Icons";
import logo from "../Assets/DeBlog-logos_white.png"

function Sidebar() {
  return (
    <div className="bg-[#181818] min-h-screen w-72 stop-0   text-[#ffffff]  ">
      <div className="title ">
        <div className="-mt-20 -ml-4">
          <img src={logo} alt="" />
        </div>
        <ul className="justify-center items-center mt-16">
          <li>
            <a href="/" className="flex items-center mb-12 pl-8 ">
              <Home />
              <span className="mx-4 text-xl">Home</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center mb-12 pl-8">
              <Search />
              <span className="mx-4 text-xl">Search</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center mb-12 pl-8">
              <YLibrary />
              <span className="mx-4 text-xl">Bookmarks</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Sidebar;
