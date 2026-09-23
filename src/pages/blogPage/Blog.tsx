import { useSearchParams } from "react-router-dom";
import { blogs } from "../../services/json/Blog.json";
import SortingBlogCards from "../../componenets/blogComponents/SortingBlogCards";
import BlogCard from "../../componenets/blogComponents/BlogCard";

const Blog = () => {

    const [searchParams] = useSearchParams();

    const sort = searchParams.get("sort");

    let sortedBlogs = [...blogs];

    if (sort === "asc") {
        sortedBlogs.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "desc") {
        sortedBlogs.sort((a, b) => b.title.localeCompare(a.title));
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-rose-100 px-6 py-10">

            {/* Heading */}
            <div className="max-w-6xl mx-auto mb-10">

                <h1 className="text-4xl font-bold text-red-900 mb-2">
                    Blog Posts
                </h1>

                <p className="text-red-700">
                    Explore our latest articles and stories
                </p>

            </div>


            {/* Sorting */}
            <SortingBlogCards sort={sort}/>
         


            {/* Blog Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                {sortedBlogs.map((blog) => (

                   <BlogCard key={blog.id} blog={blog}/>

                ))}

            </div>

        </div>
    );
};

export default Blog;