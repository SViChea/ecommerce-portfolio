"use client";
import { BlogType } from "@/types/blogType";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function BlogDetailComponent() {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogType>();

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const res = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await res.json();
      setBlog(data);
    };

    fetchBlogDetail();
  }, [blog]);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <div className="relative h-[450px] text-center overflow-hidden">
        <Image
          src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1"
          alt="Hero Banner"
          width={1201}
          height={643}
          unoptimized
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <Link
              href="#"
              className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              Election
            </Link>
            ,
            <Link
              href="#"
              className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              Politics
            </Link>
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              {blog?.title}
            </h1>
            <p className="text-base leading-8 my-5">{blog?.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
