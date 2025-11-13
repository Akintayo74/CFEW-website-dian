// import useSWR from "swr";
// import { fetcher, API_URL } from "../api";

// export function useBlogPosts(page = 1, pageSize = 1) {
//   const endpoint = `${API_URL}/public?page=${page}&pageSize=${pageSize}`;

//   const { data, error, isLoading } = useSWR(endpoint, fetcher);

//   return {
//     posts: data?.data || [], // The actual posts array
//     pagination: data?.pagination || null, // Pagination metadata
//     isLoading,
//     isError: error,
//   };
// }



import useSWR from 'swr';
import { API_URL, fetcher } from '../api';

export function useBlogPosts(postId) {
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
    post: data?.data || [],
    // pagination: data?.pagination || null,
    isLoading,
    isError: error,
  };
}