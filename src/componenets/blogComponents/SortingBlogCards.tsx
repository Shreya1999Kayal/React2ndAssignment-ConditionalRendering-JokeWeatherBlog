import { Link } from "react-router-dom"
import type { SortingBlogCardsProps } from "../../types/type/BlogCard.type"


const SortingBlogCards:React.FC<SortingBlogCardsProps> = ({sort}) => {
  return (
    <div className="max-w-6xl mx-auto flex justify-end gap-3 mb-8">

                <Link
                    to="/blog?sort=asc"
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                        sort === "asc"
                            ? "bg-red-900 text-white border-red-900"
                            : "bg-yellow-50 text-red-800 border-red-200 hover:bg-yellow-100"
                    }`}
                >
                    A-Z
                </Link>

                <Link
                    to="/blog?sort=desc"
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                        sort === "desc"
                            ? "bg-red-900 text-white border-red-900"
                            : "bg-yellow-50 text-red-800 border-red-200 hover:bg-yellow-100"
                    }`}
                >
                    Z-A
                </Link>

            </div>
  )
}

export default SortingBlogCards