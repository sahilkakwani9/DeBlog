import { useEffect } from "react";
import logo from "../Assets/DeBlog-logos_black.png";
const Hero = ({ connectWallet }) => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 120 ? addBorder() : removeBorder();
        })
    })

    const addBorder = () => {
        document.getElementById('nav').classList.add('border-b-2')
        document.getElementById('nav').classList.add('border-green-400')
        document.getElementById('nav').classList.add('glass-strong')

    }
    const removeBorder = () => {
        document.getElementById('nav').classList.remove('border-b-2')
        document.getElementById('nav').classList.remove('border-green-400')
        document.getElementById('nav').classList.remove('glass-strong')

    }
    return (
        <div className="min-h-screen glass min-w-full">
            <nav id="nav" className="flex flex-row justify-between sticky top-0 p-5">
                {/* <SpotifyLogoFull id="svg" /> */}
                <div className="left-0">
                <img className="absolute -top-20 left-0 w-1/6" src={logo} alt="" />
                </div>
                <ul className="flex flex-row items-end justify-end text-right transition-all ease-in-out duration-300 text-2xl">
                    <li className="mx-12 my-2 font-semibold cursor-pointer">Home</li>
                    <li className="mx-6 my-2 font-semibold cursor-pointer">About Us</li>
                </ul>
            </nav>
            <main className="mt-36 bg-gradient-to-b flex flex-col items-center justify-center overflow-hidden rounded-lg">
                <h2 className="font-Two text-8xl w-2/3 text-center">Your blogs go <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">Decentralised</span></h2>
                {/* <img src={logo} className='w-1/2 -mt-96' alt="" /> */}

                <p className="text-2xl text-center w-1/2 my-10">DeBlog helps you create blogs and store them on a decentralised blockchain within a span of seconds.</p>
                <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5 rounded-2xl hover:scale-94 text-2xl text-white font-Two" onClick={connectWallet}>Connect Wallet </button>
            </main>
        </div>
    )
}
export default Hero;
