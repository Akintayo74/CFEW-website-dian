// import useSWR from "swr";
// import { fetcher, API_URL } from "../api";

// export function useFeaturedPost(type = "blog") {
//   // Fetch only the most recent post (pageSize=1)
//   const endpoint = `${API_URL}/public?page=1&pageSize=1${type ? `&type=${type}` : ''}`;
  
//   const { data, error, isLoading } = useSWR(endpoint, fetcher);

//   return {
//     post: data?.data?.[0] || null, // Get the first (most recent) post
//     isLoading,
//     isError: error,
//   };
// }


import useSWR from "swr";
import { fetcher, API_URL } from "../api";

export function useFeaturedPost(type = "blog") {
  // Step 1: Fetch the most recent post (just the ID and basic info)
  const listEndpoint = `${API_URL}/public?page=1&pageSize=1${type ? `&type=${type}` : ''}`;
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