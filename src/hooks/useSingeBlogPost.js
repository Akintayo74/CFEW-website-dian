import useSWR from 'swr';
import { API_URL, fetcher } from '../api';

export function useSingleBlogPost(postId) {
  // Only fetch if we have a postId
  const { data, error, isLoading } = useSWR(
    postId ? `${API_URL}/${postId}` : null,
    fetcher,
    {
      revalidateOnFocus: false, // Don't refetch when window regains focus
      shouldRetryOnError: false, // Don't retry on 404s
    }
  );

  return {
    post: data?.data || null, // Return null, not empty array (it's a single post)
    isLoading,
    isError: error,
  };
}