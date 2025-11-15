import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import DataStateWrapper from "../DataStateWrapper/DataStateWrapper";

function BlogList({ 
  page = 1, 
  pageSize = 4, 
  gridCols = "lg:grid-cols-4",
  type = 'blog'
}) {
  const { posts, pagination, isLoading, isError } = useBlogPosts(page, pageSize, type);

  // Custom loading skeleton for grid layout
  const loadingSkeleton = (
    <div className={`grid grid-cols-1 gap-12 md:grid-cols-2 ${gridCols}`}>
      {[...Array(pageSize)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-300 aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );

  return (
    <DataStateWrapper
      isLoading={isLoading}
      isError={isError}
      data={posts}
      config={{
        loadingComponent: loadingSkeleton,
        errorMessage: "Failed to load blog posts. Please try again later.",
        emptyMessage: "No posts available at the moment.",
      }}
    >
      {(posts) => (
        <div className={`grid grid-cols-1 gap-12 md:grid-cols-2 ${gridCols}`}>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              imageSrc={post.featuredImage || "/slide-1.png"}
              imageAlt={post.title}
              publishDate={new Date(post.createdAt || Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              title={post.title}
              postId={post.id}
            />
          ))}
        </div>
      )}
    </DataStateWrapper>
  );
}

export default BlogList;