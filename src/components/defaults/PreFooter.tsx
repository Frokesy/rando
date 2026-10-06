import Image from "next/image";

const PreFooter = () => {
  return (
    <div className="bg-white lg:py-30 py-20 flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-10 lg:space-x-10 lg:w-[80%] w-[90%] mx-auto">
      <div className="lg:w-[50%] w-full">
        <Image
          src="/logo-black.svg"
          width={100}
          height={100}
          alt="Ark Capital Logo"
        />
        <h2 className="lg:text-[56px] text-[34px] font-semibold lg:mt-0 mt-3">
          Work with Ark Capital
        </h2>
        <p className="lg:text-[18px] text-[#636363] mt-3">
          We work with founders, engineers, investors, financial institutions,
          technology companies and strategic partners who share our interest in
          building valuable and enduring businesses.
        </p>
        <div className="flex items-center space-x-4 lg:mt-10 mt-6">
          <button className="text-[14px] bg-black py-2 px-6 rounded-full text-white hover:bg-gray-800 transition-colors duration-200">
            Partner with us
          </button>
          <button className="text-[14px] bg-inherit py-2 px-6 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-colors duration-200">
            Submit a venture
          </button>
        </div>
      </div>

      <div className="lg:w-[50%] w-full">
        <Image
          src="/prefooter.png"
          width={534}
          height={428}
          className="h-auto w-full"
          alt="Ark Capital Prefooter Graphic"
        />
      </div>
    </div>
  );
};

export default PreFooter;
