import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "venue2"
  && defined(slug.current)
]|order(dateavailable desc)[0...12]{_id, name, dateAvailable, address, slug, image, isopen}`;

const options = { next: { revalidate: 30 } };

export default async function TextPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(posts);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={"/"}>
              <h2 className="text-xl font-semibold">{post.name}</h2>
              <p>{new Date(post.dateAvailable).toLocaleDateString()}</p>
              {post.isopen ? <p>Open</p> : <>close</>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
