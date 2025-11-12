import React from "react";
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader";
import BlogCard from "../BlogCard/BlogCard";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { useBlogPosts } from "../../hooks/useBlogPosts";

function StoriesInsights() {
  const { posts, pagination, isLoading, isError } = useBlogPosts(1, 4);

  return (
    <Section spacing="looseSymmetrical">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeader>Stories and Insights</SectionHeader>
          <p className="mb-12">
            Stay informed with stories from the field, environmental tips, and
            updates on our ongoing programs.
          </p>
          {/* <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:justify-between lg:grid-cols-4 2xl:grid-cols-4"> */}
            {/* Loading State */}
            {isLoading && (
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:justify-between lg:grid-cols-4 2xl:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-300 aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-6 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            )}

            {/* Error State */}
            {isError && (
              <div className="text-center py-12">
                <p className="text-red-600">
                  Failed to load blog posts. Please try again later.
                </p>
              </div>
            )}

            {/* Data State */}
            {!isLoading && !isError && posts.length > 0 && (
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:justify-between lg:grid-cols-4 2xl:grid-cols-4">
                {posts.map((post) => (
                  <BlogCard
                    key={post.id}
                    imageSrc={post.featuredImage || "/slide-1.png"}
                    imageAlt={post.title}
                    publishDate={new Date(
                      post.createdAt || Date.now()
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    title={post.title}
                    postId={post.id}
                    postTitle={post.title}
                  />
                ))}
              </div>
            )}

            {/* Empty State */}
            {!isLoading && !isError && posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No blog posts available at the moment.
                </p>
              </div>
            )}
          {/* </div> */}

          <Button className="mt-12" align="none" color="overlay" size="medium">
            More news
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default StoriesInsights;
