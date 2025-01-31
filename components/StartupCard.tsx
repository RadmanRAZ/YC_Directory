import { FormatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{FormatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span>{post.views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`user/${post.author?._id}`}>
            <p className="line-clamp-1 text-16-meduim">{post.author?.name}</p>
          </Link>
          <Link href={`/startups/${post._id}`}>
            <h1 className="text-26-semibold line-clamp-1">{post.title}</h1>
          </Link>
        </div>
        <Link href={`user/${post.author?._id}`}>
          <p>image</p>
        </Link>
      </div>
      <Link href={`/startups/${post._id}`} >
        <p className="startup-card_desc">
            {post.description}
        </p>
        <img src={post.image} alt="image" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${post.category.toLowerCase()}`} >
            {post.category}
        </Link>
        <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${post._id}`} >
            Details</Link>

        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
