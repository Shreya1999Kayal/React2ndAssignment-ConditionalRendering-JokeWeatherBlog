import React from "react";
import { Link } from "react-router-dom";
import type { AuthorBlogsCardsProps } from "../../types/type/BlogCard.type";


const AuthorBlogsCards:React.FC<AuthorBlogsCardsProps> = ({blog}) => {
  return (
      <div
                        key={blog.id}
                        className="bg-white rounded-xl overflow-hidden border border-red-300 shadow-sm hover:shadow-lg transition-all duration-300"
                    >

                        {/* Blog Image */}
                        <div className="h-52 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-5">

                            {/* Category */}
                            <span className="inline-block bg-yellow-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                                {blog.category}
                            </span>

                            {/* Blog Title */}
                            <h2 className="text-lg font-bold text-red-900 mb-4">
                                {blog.title}
                            </h2>

                            {/* Blog Content */}
                            <p className="text-sm text-red-700 mb-5">
                                {blog.content}
                            </p>

                            {/* View Details */}
                            <Link
                                to={`/blog/${blog.id}`}
                                className="inline-block bg-red-900 text-yellow-100 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-800 transition"
                            >
                                View Details →
                            </Link>

                        </div>

                    </div>
  )
}

export default AuthorBlogsCards