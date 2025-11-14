import useSWR from "swr";
import { fetcher, API_URL } from '../api';

export function useAllPosts(type = "blog") {
  // Step 1: Fetch tall posts (just the ID and basic info)
  const listEndpoint = `${API_URL}/public?${type ? `&type=${type}` : ''}`;
  const { data: listData, error: listError } = useSWR(listEndpoint, fetcher);

  const mostRecentPostId = listData?.data?.[0]?.id;

  // Step 2: Fetch the full post details (including textBlocks)
  const detailEndpoint = mostRecentPostId ? `${API_URL}/${mostRecentPostId}` : null;
  const { data: detailData, error: detailError, isLoading } = useSWR(detailEndpoint, fetcher);

  return {
    post: detailData?.data || null,
    isLoading: isLoading || !listData, // Loading if either request is pending
    isError: listError || detailError,
  };
}