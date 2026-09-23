import type { Blog } from "../interface/blog.interface";


export type AuthorBlogsCardsProps = {
    blog: Blog;
};

export type SortingBlogCardsProps = {
    sort: string | null;
}

export type BlogCardsProps = {
    blog: Blog;
}

export type BlogSingleDetailsCardProps = {
    blog: Blog;
}