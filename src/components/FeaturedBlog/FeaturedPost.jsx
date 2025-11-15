import React from "react";
import LatestCards from "../LatestCards/LatestCards";
import { useFeaturedPost } from "../../hooks/useFeaturedPost";
import DataStateWrapper from "../DataStateWrapper/DataStateWrapper";

function FeaturedPost({ type = "blog" }) {
  const { post, isLoading, isError } = useFeaturedPost(type);

  const loadingSkeleton = (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 md:items-center mb-16 md:mb-30 animate-pulse">
      <div className="w-full h-64 md:h-96 bg-gray-300"></div>
      <div className="flex flex-col gap-5">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded w-32"></div>
      </div>
    </div>
  );

  // Helper functions
  const getExcerpt = (post) => {
    if (type === "blog" && post.textBlocks) {
      const sortedTextBlocks = [...post.textBlocks].sort((a, b) => a.position - b.position);
      return sortedTextBlocks[0]?.content || "Read this latest story from our team.";
    }
    return post.excerpt || "Read more about this update.";
  };

  const getPublisher = (post) => {
    if (type === "press-release") return post.press || "Centre for Earth Works";
    return post.author || "Centre for Earth Works";
  };

  return (
    <DataStateWrapper
      isLoading={isLoading}
      isError={isError}
      data={post}
      config={{
        loadingComponent: loadingSkeleton,
        errorMessage: "Failed to load featured post.",
        emptyComponent: null, // Return nothing if no post
      }}
    >
      {(post) => (
        <LatestCards
          imageSrc={post.featuredImage || "/slide-1.png"}
          title={post.title}
          publisher={getPublisher(post)}
          dateSent={new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          textExcerpt={getExcerpt(post)}
          postId={post.id}
          enableLink={type === 'blog'}
        />
      )}
    </DataStateWrapper>
  );
}

export default FeaturedPost;
