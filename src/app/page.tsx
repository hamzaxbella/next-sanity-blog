import Image from "next/image";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "../lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30 // revalidate the data every 30 seconds

// fetching data
async function getData() {
  const query = `
    * [_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      titleImage,
      "currentSlug" : slug.current
    }`;
  const data = await client.fetch(query);
  return data;
}
export default async function Home() { // we turned it on to an async function because we are in a server component and the data is totally safe.
  const data : simpleBlogCard[] = await getData()
  console.log(data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-2xl 4 mt-5">
      {data.map((post , idx) => (
         <Card key={idx}> 
          <Image width={500} height={500} src={urlFor(post.titleImage).url()} alt='thumbnail' className="rounded-2xl h-[200px] object-cover"/>
          <CardContent className="mt-5 text-lg ">
            <h3 className="font-semibold line-clamp-1 text-xl">{post.title}</h3>
            <p className="mt-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{post.smallDescription}</p>
            <Button asChild className='w-full mt-7'> 
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
         </Card>
      ))}
    </div>
  );
}
