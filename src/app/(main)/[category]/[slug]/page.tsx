import { Metadata } from "next";

import FloatingButton from "@/components/common/floating-button";
import Giscus from "@/components/post_detail/giscus";
import { PostBody } from "@/components/post_detail/post-body";
import { PostHeader } from "@/components/post_detail/post-header";
import TocSidebar from "@/components/post_detail/table-of-content-sidebar";
import TocTop from "@/components/post_detail/table-of-content-top";
import { baseDomain } from "@/config/const";
import {
  getPostDetail,
  getPostPaths,
  parsePostAbstract,
  parseToc,
} from "@/lib/post";

type Props = {
  params: { category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateMetadata({
  params: { category, slug },
}: Props): Promise<Metadata> {
  const post = await getPostDetail(category, slug);

  const title = `${post.title} | Discaptive`;
  const imageURL = post.thumbnail;

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      type: "article",
      publishedTime: post.date.toISOString(),
      url: `${baseDomain}${post.url}`,
      images: [imageURL],
    },
    twitter: {
      title,
      description: post.desc,
      images: [imageURL],
    },
  };
}

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((item) => ({ category: item.categoryPath, slug: item.slug }));
  return paramList;
}

const PostDetail = async ({ params: { category, slug } }: Props) => {
  const post = await getPostDetail(category, slug);
  const toc = parseToc(post.content);
  return (
    <div className="prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6">
      <PostHeader post={post} />
      <TocTop toc={toc} />
      <article className="relative">
        <TocSidebar toc={toc} />
        <PostBody post={post} />
      </article>
      <hr />
      <Giscus />
      <FloatingButton />
    </div>
  );
};

export default PostDetail;