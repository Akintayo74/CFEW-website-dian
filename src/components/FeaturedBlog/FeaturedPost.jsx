import React from "react";
import LatestCards from "../LatestCards/LatestCards";
import { useFeaturedPost } from "../../hooks/useFeaturedPost";

function FeaturedPost({ type = "blog" }) {
  const { post, isLoading, isError } = useFeaturedPost(type);

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

  // Get excerpt text based on type
  const getExcerpt = () => {
    // For blogs: use first textBlock
    if (type === "blog" && post.textBlocks) {
      const sortedTextBlocks = [...post.textBlocks].sort((a, b) => a.position - b.position);
      return sortedTextBlocks[0]?.content || "Read this latest story from our team.";
    }
    
    // For press-release and publications: use excerpt field
    return post.excerpt || "Read more about this update.";
  };

  // Get publisher/author based on type
  const getPublisher = () => {
    if (type === "press-release") {
      return post.press || "Centre for Earth Works";
    }
    return post.author || "Centre for Earth Works";
  };

  return (
    <LatestCards
      imageSrc={post.featuredImage || "/slide-1.png"}
      title={post.title}
      publisher={getPublisher()}
      dateSent={new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
      textExcerpt={getExcerpt()}
      postId={post.id}
      enableLink={type==='blog'}
    />
  );
}

export default FeaturedPost;
