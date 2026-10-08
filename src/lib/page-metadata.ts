import type { Metadata } from "next";

export function pageMetadata(title: string,description: string,path: string,image?: string): Metadata {
  const configured=process.env.NEXT_PUBLIC_SITE_URL;
  const base=configured? new URL(configured):undefined;
  return {
    title: title==="Ark Capital"? { absolute: title }:title,
    description,
    ...(base? { metadataBase: base,alternates: { canonical: path } }:{}),
    openGraph: {
      type: "website",
      siteName: "Ark Capital",
      title: title==="Ark Capital"? title:`${title} | Ark Capital`,
      description,
      ...(base? { url: path,...(image? { images: [{ url: image }] }:{}) }:{}),
    },
    twitter: { card: "summary_large_image",title: title==="Ark Capital"? title:`${title} | Ark Capital`,description,...(base&&image? { images: [image] }:{}) },
  };
}
