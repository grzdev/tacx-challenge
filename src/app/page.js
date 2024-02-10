import Image from "next/image";
import Logo from "../../design/images/logo.svg"

export default function Home() {
  return (
    <main>
      <nav className="border-b-2 border-red-200 h-[6rem] flex flex-row justify-between items-center px-[10rem]">
        <div>
          <Image
            src={Logo}
            alt=""
          />
        </div>

        <div className="flex flex-row gap-[2rem]">
          <h1 className="text-gray-400 hover:text-black transition-colors duration-300 font-medium cursor-pointer">
            Home
          </h1>
          <h1 className="text-gray-400 hover:text-black transition-colors duration-300 font-medium cursor-pointer">
            About
          </h1>
          <h1 className="text-gray-400 hover:text-black transition-colors duration-300 font-medium cursor-pointer">
            Contact
          </h1>
          <h1 className="text-gray-400 hover:text-black transition-colors duration-300 font-medium cursor-pointer">
            Blog
          </h1>
          <h1 className="text-gray-400 hover:text-black transition-colors duration-300 font-medium cursor-pointer">
            Careers
          </h1>
        </div>

        <div>
          <button className="w-[11.5rem] h-[3.2rem] rounded-[2rem] bg-gradient-to-r from-green-400 to-cyan-500 text-white ">
            Request invite
          </button>
        </div>
      </nav>
    </main>
  );
}
