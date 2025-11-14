import useSWR from "swr";
import { fetcher, API_URL } from "../api";

export function useFeaturedPost(type = "blog") {
  // Fetch only the most recent post (pageSize=1)
  const endpoint = `${API_URL}/public?page=1&pageSize=1${type ? `&type=${type}` : ''}`;
  
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  return {
    post: data?.data?.[0] || null, // Get the first (most recent) post
    isLoading,
    isError: error,
  };
}