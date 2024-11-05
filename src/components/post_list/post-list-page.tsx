import {
  getAllPostCount,
  getCategoryDetailList,
  getSortedPostList,
} from "@/lib/post";
import CategoryList from "./category-list";
import PostCard from "./post-card";

interface PostListProps {
  category?: string;
}

export default async function PostListPage({ category }: PostListProps) {
  const postList = await getSortedPostList(category);
  const categoryList = await getCategoryDetailList();
  const allPostCount = await getAllPostCount();

  return (
    <section className="mx-auto mt-12 w-full max-w-[950px] px-6">
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <section>
        <ul>
          {postList.map((post) => (
            <PostCard key={post.url + post.date} post={post} />
          ))}
        </ul>
      </section>
    </section>
  );
}
