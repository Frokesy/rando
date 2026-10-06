import Link from "next/link";
import {
  EmailIcon,
  FooterLogo,
  FooterLogoMobile,
  LinkedInIcon,
  XIcon,
} from "../icons";

const Footer = () => {
  return (
    <div className="bg-[#000501]">
      <div className="lg:w-[80%] w-[90%] mx-auto lg:py-20 py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:flex lg:w-[60%] lg:justify-between">
            <div className="flex flex-col space-y-2">
              <p className="text-white text-[14px] font-semibold">Company</p>
              <p className="text-white/55 text-[14px]">About</p>
              <p className="text-white/55 text-[14px]">Capabilities</p>
              <p className="text-white/55 text-[14px]">Portfolio</p>
              <p className="text-white/55 text-[14px]">Insights</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-white text-[14px] font-semibold">
                Get in Touch
              </p>
              <p className="text-white/55 text-[14px]">Contact</p>
              <p className="text-white/55 text-[14px]">Partner with us</p>
              <p className="text-white/55 text-[14px]">Submit a venture</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-white text-[14px] font-semibold">Legal</p>
              <p className="text-white/55 text-[14px]">Privacy Policy</p>
              <p className="text-white/55 text-[14px]">Terms of Use</p>
              <p className="text-white/55 text-[14px]">Disclaimer</p>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col items-start space-y-4 lg:w-[30%] lg:items-end lg:justify-end">
            <Link
              href="/#contact"
              className="block rounded-full bg-white px-6 py-3 text-center text-[14px] text-black hover:bg-gray-200 lg:py-2"
            >
              Contact Us
            </Link>
            <p className="max-w-sm text-left text-[14px] leading-relaxed text-white/55 lg:text-end">
              Building globally relevant companies and financial systems from
              Africa.
            </p>
            <div className="flex items-center space-x-2">
              <div className="">
                <LinkedInIcon />
              </div>
              <div className="">
                <XIcon />
              </div>
              <div className="">
                <EmailIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 border-t-2 border-[#333] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/55 text-[14px]">
            © {new Date().getFullYear()} Ark Capital. All rights reserved.
          </p>
          <p className="text-white/55 text-[14px]">Back to top ↗</p>
        </div>

        <div className="my-10 hidden lg:block [&>svg]:h-auto [&>svg]:w-full">
          <FooterLogo />
        </div>
        <div className="my-8 block lg:hidden [&>svg]:h-auto [&>svg]:w-full">
          <FooterLogoMobile />
        </div>
      </div>
    </div>
  );
};

export default Footer;
