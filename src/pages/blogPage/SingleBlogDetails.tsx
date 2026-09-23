import { useParams } from "react-router-dom";
import { blogs } from "../../services/json/Blog.json";
import BlogSingleDetailsCard from "../../componenets/blogComponents/BlogSingleDetailsCard";

const SingleBlogDetails = () => {
    const { id } = useParams();

    const blog = blogs.find((blog) => blog.id === Number(id));

    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-rose-100 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-red-900">
                    Blog Not Found
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-rose-100 px-6 py-10">

            <div className="max-w-4xl mx-auto">

                {/* Blog Details Card */}
                <BlogSingleDetailsCard blog={blog}/>

            </div>

        </div>
    );
};

export default SingleBlogDetails;