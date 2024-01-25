//Site Config
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

//Project Item
export type ProjectItem = {
  title: string;
  description: string;
  name: string;
  about: string;
  image: string;
  button: string;
  buttonSource: string;
};

export type ProjectConfig = {
  projectItems: ProjectItem[];
};


// HOME CONFIG
export type HomeConfig = {
  id: number;
  title: string;
  about: string;
  description: string;
  image: string;
};