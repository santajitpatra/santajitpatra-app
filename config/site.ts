import { SiteConfig } from "@/types";

const domain = process.env.NEXTAUTH_URL;
export const siteConfig: SiteConfig = {
  name: "Santajit Patra",
  description:
    "Expert web development and digital marketing solutions for business success.",
  url: `${domain}`,
  ogImage: `${domain}/thumbnail.png`,
  links: {
    twitter: "https://twitter.com/santajitpatra",
    github: "https://github.com/santajitpatra/santajitpatra-app",
  },
};
