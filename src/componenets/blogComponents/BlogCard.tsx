import type { BlogCardsProps } from "../../types/type/BlogCard.type"
import { Link } from "react-router-dom";


const BlogCard:React.FC<BlogCardsProps> = ({blog}) => {
  return (
     <div
                        key={blog.id}
                        className="bg-white rounded-xl overflow-hidden border border-red-100 shadow-sm hover:shadow-lg transition-all duration-300"
                    >

                        {/* Blog Image */}
                        <div className="h-52 overflow-hidden">

                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />

                        </div>


                        {/* Card Content */}
                        <div className="p-5">

                            {/* Category */}
                            <span className="inline-block bg-yellow-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                                {blog.category}
                            </span>


                            {/* Title */}
                            <h2 className="text-lg font-bold text-red-900 mb-3">
                                {blog.title}
                            </h2>


                            {/* Description */}
                            <p className="text-sm text-red-700 mb-5">
                                {blog.content}
                            </p>


                            {/* Author */}
                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    {/* Avatar */}
                                    <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center text-sm font-bold text-red-800">
                                        {blog.authorName.charAt(0)}
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-red-900">
                                            {blog.authorName}
                                        </p>

                                        <p className="text-xs text-red-500">
                                            Author
                                        </p>
                                    </div>

                                </div>


                                {/* Details */}
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="text-sm font-semibold text-red-800 hover:text-red-950"
                                >
                                    Read →
                                </Link>

                            </div>

                        </div>

                    </div>
  )
}

export default BlogCard