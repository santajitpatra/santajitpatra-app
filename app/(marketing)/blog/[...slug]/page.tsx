import { getPostBySlug } from "@/lib/mdx";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.slug };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="py-24">
      <div className="container py-4 ">{content}</div>
    </section>
  );
};

export default Page;
