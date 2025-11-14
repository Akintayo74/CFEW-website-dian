import useSWR from "swr";
import { fetcher, API_URL } from "../api";

export function useBlogPosts(page = 1, pageSize = 8, type='blog') {
  const endpoint = `${API_URL}/public?page=${page}&pageSize=${pageSize}&type=${type}`;

  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  return {
    posts: data?.data || [], // The actual posts array
    pagination: data?.pagination || null, // Pagination metadata
    isLoading,
    isError: error,
  };
}
