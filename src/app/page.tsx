"use client";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Axios from "@/utils/axios";
import React from "react";

type BlogType = {
    date: string;
    title: string;
    description: string;
    img: string;
};
function Page() {
    const [blogs, setBlogs] = React.useState<Array<BlogType>>([]);
    React.useEffect(() => {
        Axios.get("/api").then((res) => {
            console.log(res.data);
            setBlogs(res.data);
        });
    }, []);
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            <Hero />
            {blogs.map((blog, index) => {
                return (
                    <Blog
                        key={index}
                        date={blog.date}
                        title={blog.title}
                        content={blog.description}
                        img={blog.img}
                        index = {index%2}
                    />
                );
            })}
        </div>
    );
}

export default Page;
