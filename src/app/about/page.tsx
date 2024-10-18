import { PostBody } from "@/components/post_detail/post-body";
// import { baseDomain } from "@/config/const";
import { getAboutDetail } from "@/lib/post";

// 허용된 param 외 접근시 404
export const dynamicParams = false;

const About = async () => {
  const post = await getAboutDetail();

  return (
    <div className="prose mx-auto mt-14 w-full max-w-[750px] px-5 dark:prose-invert sm:px-6">
      <article className="relative">
        <PostBody post={post} />
      </article>
      <hr />
    </div>
  );
};

export default About;
