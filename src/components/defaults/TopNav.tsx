import Image from "next/image";
import { HamburgerIcon } from "../../components/icons";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center lg:w-[80%] mx-auto px-6 my-6">
      <Image
        src="/logo-white.svg"
        width={100}
        height={100}
        alt="Ark Capital Logo"
      />
      <ul className="lg:flex hidden space-x-8">
        <li className="text-white hover:text-gray-300">Home</li>
        <li className="text-white hover:text-gray-300">Company</li>
        <li className="text-white hover:text-gray-300">Capabilities</li>
        <li className="text-white hover:text-gray-300">Portfolio</li>
      </ul>

      <button className="bg-white text-black px-6 py-2 lg:block hidden rounded-full hover:bg-gray-200 text-[14px]">
        Contact Us
      </button>
      <div className="lg:hidden block">
        <HamburgerIcon />
      </div>
    </div>
  );
};

export default TopNav;
