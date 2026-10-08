import ConfiguredLink from "../ConfiguredLink";
import { externalLinks } from "@/config/external-links";
import BackToTop from "./BackToTop";
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
              <Link href="/company" className="text-white/55 text-[14px] hover:text-white">About</Link>
              <Link href="/capabilities" className="text-white/55 text-[14px] hover:text-white">Capabilities</Link>
              <Link href="/portfolio" className="text-white/55 text-[14px] hover:text-white">Portfolio</Link>
              <Link href="/insights" className="text-white/55 text-[14px] hover:text-white">Insights</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-white text-[14px] font-semibold">
                Get in Touch
              </p>
              <Link href="/contact" className="text-white/55 text-[14px] hover:text-white">Contact</Link>
              <Link href="/contact?category=partners#enquiry" className="text-white/55 text-[14px] hover:text-white">Partner with us</Link>
              <Link href="/contact?category=founders#enquiry" className="text-white/55 text-[14px] hover:text-white">Submit a venture</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-white text-[14px] font-semibold">Legal</p>
              <ConfiguredLink href={externalLinks.privacyPolicy} className="text-white/55 text-[14px]">Privacy Policy</ConfiguredLink>
              <ConfiguredLink href={externalLinks.termsOfUse} className="text-white/55 text-[14px]">Terms of Use</ConfiguredLink>
              <ConfiguredLink href={externalLinks.disclaimer} className="text-white/55 text-[14px]">Disclaimer</ConfiguredLink>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col items-start space-y-4 lg:w-[30%] lg:items-end lg:justify-end">
            <Link
              href="/contact"
              className="block rounded-full bg-white px-6 py-3 text-center text-[14px] text-black hover:bg-gray-200 lg:py-2"
            >
              Contact Us
            </Link>
            <p className="max-w-sm text-left text-[14px] leading-relaxed text-white/55 lg:text-end">
              Building globally relevant companies and financial systems from
              Africa.
            </p>
            <div className="flex items-center space-x-2">
              <ConfiguredLink href={externalLinks.linkedin} label="Ark Capital on LinkedIn" className="inline-flex">
                <LinkedInIcon />
              </ConfiguredLink>
              <ConfiguredLink href={externalLinks.x} label="Ark Capital on X" className="inline-flex">
                <XIcon />
              </ConfiguredLink>
              <ConfiguredLink href={externalLinks.email} label="Email Ark Capital" className="inline-flex">
                <EmailIcon />
              </ConfiguredLink>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 border-t-2 border-[#333] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/55 text-[14px]">
            © {new Date().getFullYear()} Ark Capital. All rights reserved.
          </p>
          <BackToTop />
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
