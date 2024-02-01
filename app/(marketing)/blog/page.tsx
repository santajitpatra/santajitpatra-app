import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PostPreview from "@/components/Post/PostPreview";
import getPostMetadata from "@/lib/getPostMetadata";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postPreviews}
      </div>
    </MaxWidthWrapper>
  );
};

export default HomePage;
