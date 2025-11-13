import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSingleBlogPost } from "../../hooks/useSingeBlogPost";
import Container from "../Container";
import Section from "../Section";
import HeaderHome from "../Header/HeaderHome";
import { SOCIAL_LINKS } from "../../constants";

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
          <Container>
            <div className="bg-cfew-primary-600 text-white flex flex-col md:flex-row md:justify-between md:items-center">
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
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        aria-label={`Visit our ${social.alt} page`}
                        className="transition-opacity hover:opacity-80"
                      >
                        <img
                          src={social.icon}
                          width={40}
                          height={40}
                          alt={social.alt}
                          className="flex-shrink-0"
                        />
                      </a>
                    ))}
                </div>
              </div>

              <div>
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2]">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </Container>
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
