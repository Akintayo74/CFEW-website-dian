import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import Container from '../Container';
import Section from '../Section';

function BlogPostDetail() {
  const { id } = useParams();
  const { post, isLoading, isError } = useBlogPost(id);

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
              {isError.message || 'Failed to load the blog post. Please try again later.'}
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
              The blog post you're looking for doesn't exist or has been removed.
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
    <Section spacing="looseSymmetrical">
      <Container>
        <article className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/resources"
            className="inline-block mb-6 text-cfew-primary-400 hover:underline"
          >
            ← Back to Resources
          </Link>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="w-full aspect-video mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold text-cfew-dark mb-4">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
            {post.author && (
              <span className="font-medium">By {post.author}</span>
            )}
            {post.createdAt && (
              <span>
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>

          {/* Text Blocks - The main content */}
          <div className="prose prose-lg max-w-none mb-8">
            {sortedTextBlocks.length > 0 ? (
              sortedTextBlocks.map((block) => (
                <p key={block.id} className="mb-6 text-gray-700 leading-relaxed">
                  {block.content}
                </p>
              ))
            ) : (
              <p className="text-gray-600 italic">No content available.</p>
            )}
          </div>

          {/* Tags */}
          {post.Tags && post.Tags.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">
                Tags:
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.Tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </Container>
    </Section>
  );
}

export default BlogPostDetail;
