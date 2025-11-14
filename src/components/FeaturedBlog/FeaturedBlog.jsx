import React from "react";
import LatestCards from "../LatestCards/LatestCards";
import { useFeaturedPost } from "../../hooks/useFeaturedPost";

function FeaturedBlog() {
  const { post, isLoading, isError } = useFeaturedPost("blog");

  // Loading State
  if (isLoading) {
    return (
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
  }

  // Error State
  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load featured post.</p>
      </div>
    );
  }

  // No Post State
  if (!post) {
    return null;
  }

  // Get the first textBlock
  const sortedTextBlocks = post.textBlocks
    ? [...post.textBlocks].sort((a, b) => a.position - b.position)
    : [];
  
  const firstTextBlock = sortedTextBlocks.length > 0 
    ? sortedTextBlocks[0].content 
    : "Read this latest story from our team.";

  return (
    <LatestCards
      imageSrc={post.featuredImage || "/slide-1.png"}
      title={post.title}
      publisher={post.author || "Centre for Earth Works"}
      dateSent={new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
      textExcerpt={firstTextBlock}
      postId={post.id}
    />
  );
}

export default FeaturedBlog;