import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";

// metadata
export function customMetadata({
  title = "Santajit Patra - The SaaS for Everyone",
  description = "Expert web development and digital marketing solutions for business success.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title :{
      default: title,
      template: "%s - Santajit Patra",
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@santajitpatra",
    },
    icons,
    metadataBase: new URL(`${baseUrl}`),
    themeColor: "#FFF",
    // ...(noIndex && {
    //   robots: {
    //     index: false,
    //     follow: false,
    //   },
    // }),
  };
}
