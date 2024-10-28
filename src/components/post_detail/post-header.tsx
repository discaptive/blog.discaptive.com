import Link from "next/link";
import Image from "next/image";

import { Post } from "@/config/types";
import { CalendarDays, Clock3 } from "lucide-react";

interface Props {
  post: Post;
}

export const PostHeader = ({ post }: Props) => {
  return (
    <header className="mt-14">
      <h1 className="mb-5 text-4xl">{post.title}</h1>
      <div className="text-base">
        <Link
          href={`/${post.categoryPath}`}
          className="font-semibold text-indigo-600 no-underline underline-offset-4 hover:underline"
        >
          {post.categoryPublicName}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Image
          className="w-[44px] h-[44px] rounded-full"
          src="https://github.com/user-attachments/assets/20efe1d3-aee2-495a-ad80-bcad64cbd0e1"
          alt="Profile Image"
          width={44}
          height={44}
        />

        <div className="flex flex-col">
          <span className="text-sm text-foreground font-medium leading-4">
            Discaptive
          </span>

          <div className="flex justify-center gap-3 text-xs text-gray-500 dark:text-gray-400 leading-3">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-3" />
              <span>{post.dateString}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock3 className="w-3" />
              <span>{post.readingMinutes}분 소요</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
