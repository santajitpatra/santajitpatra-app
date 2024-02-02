import BlogCTA from "@/components/BlogCTA";
import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PostPreview from "@/components/PostPreview";
import { getPostMetadata } from "@/lib/mdx";

const Page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <Header
        title="Blogs"
        bg='url("https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
      />
      <BlogCTA />

      <MaxWidthWrapper className="pb-20 min-h-screen">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {postPreviews}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
