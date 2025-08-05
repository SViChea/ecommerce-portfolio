"use client";
import { BlogType } from "@/types/blogType";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BlogComponent() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setBlogs(data.posts);
    };
    fetchBlogs();
  }, blogs);

  return (
    <section className="bg-white">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-black mb-4">
          Discover New Adventures
        </h1>
        <p className="text-lg text-gray-600">
          Explore, discover, and find inspiration through these exciting
          journeys.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog: BlogType) => (
            <div key={blog.id} className="relative">
              <Link
                href="#_"
                className="block overflow-hidden group rounded-xl shadow-lg"
              >
                <Image
                  height={300}
                  width={500}
                  unoptimized
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmb3Jlc3R8ZW58MHwwfHx8MTcyNjkxODYzNHww&ixlib=rb-4.0.3&q=80&w=1080"
                  className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                  alt="Adventure"
                />
              </Link>
              <div className="relative mt-5">
                <Link href="#_" className="block mb-3 hover:underline">
                  <h2 className="text-2xl font-bold leading-8 text-black  transition-colors duration-200 hover:text-purple-700 ">
                    {blog.title}
                  </h2>
                </Link>
                <p className="mb-4 text-gray-700 line-clamp-4">
                  {blog.body}
                </p>
                <Link
                  href="#_"
                  className="font-medium underline text-purple-600 "
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
