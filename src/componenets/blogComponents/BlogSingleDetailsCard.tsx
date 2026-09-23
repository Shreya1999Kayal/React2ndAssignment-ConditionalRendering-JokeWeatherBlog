import { Link } from "react-router-dom"
import type { BlogSingleDetailsCardProps } from "../../types/type/BlogCard.type"



const BlogSingleDetailsCard:React.FC<BlogSingleDetailsCardProps> = ({blog}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden">

                    {/* Blog Image */}
                    <div className="h-72 md:h-96 overflow-hidden">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8 md:p-10">

                        {/* Category */}
                        <span className="inline-block bg-yellow-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                            {blog.category}
                        </span>

                        {/* Blog Title */}
                        <h1 className="text-3xl md:text-5xl font-bold text-red-900 mb-6">
                            {blog.title}
                        </h1>

                        {/* Author */}
                        <p className="text-sm text-red-500 mb-6">
                            Written by{" "}
                            <span className="font-semibold text-red-800">
                                {blog.authorName}
                            </span>
                        </p>

                        {/* Content */}
                        <p className="text-red-700 text-base md:text-lg leading-8 mb-8">
                            {blog.content}
                        </p>

                        {/* Author Button */}
                        <Link
                            to={`/author/${blog.authorId}`}
                            className="inline-block bg-red-900 text-yellow-100 px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
                        >
                            View Author →
                        </Link>

                    </div>

                </div>
  )
}

export default BlogSingleDetailsCard