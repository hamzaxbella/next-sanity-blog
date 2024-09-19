import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "../../../lib/sanity";
import Image from "next/image";
import { PortableText } from "next-sanity";

export const revalidate = 30 // revalidate the data every 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
      'currentSlug' : slug.current,
      title,
      titleImage,
      content  
    }[0]`; // returns one element as an object rather than an array. so we don't need to map over it.
  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="mt-8">
      <div className="text-center">
        <span className="font-bold text-center text-primary text-xl tracking-wide capitalize">
          Hamza Bella - blog.
        </span>
      </div>
      <span className="mt-6 block text-4xl text-center leading-10 font-bold tracking-tight">
        {data.title}
      </span>
      <div className="flex flex-col justify-center ">
        <Image
          src={urlFor(data.titleImage).url()}
          alt="Banner Iage"
          className="rounded-lg object-cover ring-1 ring-gray-200 ring-opacity-75 dark:bg-slate-500  mt-8 max-h-[500px]"
          priority
          width={1000}
          height={300}
        />
        <div className="mt-16 mx-auto prose prose-blue prose-a:text-primary prose-li:marker:text-primary prose-2xl dark:prose-invert">
          <PortableText value={data.content}/>
          <a href="">nextjs</a>
        </div>
      </div>
    </div>
  );
}
