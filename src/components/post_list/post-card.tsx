import Image from "next/image";
import Link from "next/link";

import { Post } from "@/config/types";
import { Clock3 } from "lucide-react";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <>
      <div>
        <li className="flex items-center gap-12 py-4">
          <Link href={post.url} className="hidden sm:inline flex-shrink-0">
            <Image
              src={post.thumbnail}
              alt={`thumbnail for ${post.title}`}
              className="object-cover aspect-[328/220] w-[328px] h-[220px] rounded-2xl border border-secondary hover:opacity-75"
              width={328}
              height={220}
            />
          </Link>

          <Link href={post.url} className="flex-grow">
            <div className="flex flex-col gap-1 hover:opacity-75">
              <div className="text-sm font-medium text-indigo-600">
                {post.categoryPublicName}
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <div className="text-xs font-normal text-primary/50">
                    {post.dateString}
                  </div>

                  <div className="text-2xl font-bold line-clamp-2">
                    {post.title}
                  </div>

                  <div className="text-base font-normal line-clamp-2">
                    {post.desc}
                  </div>
                </div>

                <div className="flex gap-1 items-center text-xs font-normal text-primary/40">
                  <Clock3 className="w-[13px]" />
                  <span>{post.readingMinutes}분 소요</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </div>
      <div className="h-[1.4px] bg-secondary my-4"></div>
    </>
  );
};

export default PostCard;
