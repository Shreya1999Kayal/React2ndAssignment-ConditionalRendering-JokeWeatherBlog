import { useParams } from "react-router-dom";
import { blogs } from "../../services/json/Blog.json";
import AuthorBlogsCards from "../../componenets/blogComponents/AuthorBlogsCards";

const Author = () => {
    const { authorId } = useParams();

    const authorBlogs = blogs.filter(
        (blog) => blog.authorId === Number(authorId)
    );

    if (authorBlogs.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-rose-100 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-red-900">
                    Author Not Found
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-rose-100 px-6 py-10">

            {/* Author Heading */}
            <div className="w-fit mx-auto border-b-4 border-red-800 pb-2 mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-900">
                    Author: {authorBlogs[0].authorName}
                </h1>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

                {authorBlogs.map((blog) => (

                    <AuthorBlogsCards key={blog.id} blog={blog}/>

                ))}

            </div>

        </div>
    );
};

export default Author;