import React from "react";

function Blog({
    date,
    title,
    content,
    img,
    index
}: {
    date: string;
    title: string;
    content: string;
    img: string;
    index: number;
}) {
    return (
        <div className={`w-full min-h-screen flex justify-evenly items-center ${!index && "bg-[#E3D5CA]"} px-10 gap-20`}>
            <div className="flex flex-col  text-left w-full min-w-[80%]">
                <p className="font-light text-sm">Date Here</p>
                <h1 className="font-bold text-xl mb-2">
                    {title ? title : "Title Not Available"}
                </h1>
                    {content ? content : "Content Not Available"}
            </div>
            <div className="flex flex-col justify-center items-center min-w-[100px] w-full rounded-lg overflow-hidden ">
                <img
                    className="object-center object-cover"
                    src={img}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Blog;
