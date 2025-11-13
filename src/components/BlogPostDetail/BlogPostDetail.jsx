import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSingleBlogPost } from "../../hooks/useSingeBlogPost";
import Container from "../Container";
import Section from "../Section";
import HeaderHome from "../Header/HeaderHome";

function BlogPostDetail() {
  const { id } = useParams();
  const { post, isLoading, isError } = useSingleBlogPost(id);

  // Loading State
  if (isLoading) {
    return (
      <Section spacing="looseSymmetrical">
        <Container>
          <div className="animate-pulse">
            <div className="h-96 bg-gray-300 mb-8"></div>
            <div className="h-8 bg-gray-300 mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-300 mb-2 w-1/4"></div>
            <div className="space-y-3 mt-8">
              <div className="h-4 bg-gray-300"></div>
              <div className="h-4 bg-gray-300"></div>
              <div className="h-4 bg-gray-300 w-5/6"></div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  // Error State - API request failed
  if (isError) {
    return (
      <Section spacing="looseSymmetrical">
        <Container>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Error Loading Post
            </h2>
            <p className="text-gray-600 mb-6">
              {isError.message ||
                "Failed to load the blog post. Please try again later."}
            </p>
            <Link
              to="/resources"
              className="text-cfew-primary-400 hover:underline"
            >
              Back to Resources
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  // Not Found State - Post doesn't exist or isn't published
  if (!post) {
    return (
      <Section spacing="looseSymmetrical">
        <Container>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Post Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
            <Link
              to="/resources"
              className="text-cfew-primary-400 hover:underline"
            >
              Back to Resources
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  // Sort textBlocks by position to ensure correct order
  const sortedTextBlocks = post.textBlocks
    ? [...post.textBlocks].sort((a, b) => a.position - b.position)
    : [];

  return (
    <div className="bg-cfew-interface min-h-screen">
      <HeaderHome />
      <Section spacing="none">
        <Section background="green">
          <div className="bg-cfew-primary-600 text-white flex flex-col md:flex-row md:justify-between">
            <div className="py-8 md:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm mb-6">
                <Link to="/resources" className="hover:underline">
                  BLOG
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">
                {post.title}
              </h1>

              {/* Subtitle/Excerpt (if available) */}
              {post.excerpt && (
                <p className="text-lg md:text-xl mb-6 max-w-3xl opacity-90">
                  {post.excerpt}
                </p>
              )}

              {/* Social Share Icons */}
              <div className="flex items-center gap-4">
                <button
                  className="w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition"
                  aria-label="Share on X"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  className="w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button
                  className="w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition"
                  aria-label="Share on Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  className="w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition"
                  aria-label="Copy link"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="w-full">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </Section>

        {/* Content Section */}
        <Section spacing="looseSymmetrical">
          <Container>
            <article className="max-w-4xl mx-auto">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-cfew-dark mb-8">
                {post.author && (
                  <span className="font-medium">By {post.author}</span>
                )}
                {post.createdAt && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </>
                )}
              </div>

              {/* Text Blocks - The main content */}
              <div className="prose prose-lg max-w-none mb-12">
                {sortedTextBlocks.length > 0 ? (
                  sortedTextBlocks.map((block) => (
                    <p
                      key={block.id}
                      className="mb-6 text-cfew-dark leading-relaxed text-base md:text-lg"
                    >
                      {block.content}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 italic">No content available.</p>
                )}
              </div>

              {/* Tags */}
              {post.Tags && post.Tags.length > 0 && (
                <div className="mb-12 pb-8 border-b border-gray-300">
                  <div className="flex flex-wrap gap-2">
                    {post.Tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-4 py-2 bg-cfew-primary-100 text-cfew-primary-600 rounded-full text-sm font-medium"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Arrows - Previous/Next Posts */}
              <div className="flex items-center justify-center gap-6 py-8">
                <button
                  className="w-12 h-12 rounded-full border-2 border-cfew-primary-600 text-cfew-primary-600 hover:bg-cfew-primary-600 hover:text-white flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous post"
                  disabled
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button className="px-6 py-3 bg-cfew-primary-600 text-white rounded-lg hover:bg-cfew-primary-800 transition font-medium">
                  ALL POSTS
                </button>

                <button
                  className="w-12 h-12 rounded-full border-2 border-cfew-primary-600 text-cfew-primary-600 hover:bg-cfew-primary-600 hover:text-white flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next post"
                  disabled
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </article>
          </Container>
        </Section>
      </Section>
    </div>
  );
}

export default BlogPostDetail;
