import useSWR from 'swr';

// Define the ArticleDto interface to match the API response
export interface ArticleDto {
  id: string;
  title: string;
  slug: string;
  description: string;
  priority: number;
  bgrImg: string;
  createdAt: string;
  tags: string[];
}

// Fetcher function for SWR
const fetcher = async (url: string): Promise<ArticleDto[]> => {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
};

// Custom hook for fetching articles with SWR
export function useArticles(fallbackData?: ArticleDto[]) {
  const { data, error, isLoading, mutate, isValidating } = useSWR<ArticleDto[]>(
    'https://localhost:7087/api/Article',
    fetcher,
    {
      // Caching configuration
      revalidateOnFocus: false, // Don't refetch when window regains focus
      revalidateOnReconnect: true, // Refetch when connection is restored
      refreshInterval: 5 * 60 * 1000, // Auto-refresh every 5 minutes
      dedupingInterval: 2000, // Dedupe requests within 2 seconds
      errorRetryCount: 3, // Retry failed requests 3 times
      errorRetryInterval: 1000, // Wait 1 second between retries
      
      // Use fallback data if provided (for SSR)
      fallbackData,
      
      // Don't refetch immediately if we have fallback data
      revalidateIfStale: !fallbackData,
      revalidateOnMount: !fallbackData,
      
      // Keep previous data while revalidating
      keepPreviousData: true,
      
      // Custom error retry logic
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Don't retry on 404
        if (error.status === 404) return;
        
        // Don't retry after 3 attempts
        if (retryCount >= 3) return;
        
        // Exponential backoff
        setTimeout(() => revalidate({ retryCount }), Math.pow(2, retryCount) * 1000);
      },
      
      // Log errors for debugging
      onError: (error) => {
        console.error('Error fetching articles:', error);
      }
    }
  );

  return {
    articles: data || [],
    isLoading,
    isError: !!error,
    error,
    isValidating,
    mutate, // Function to manually trigger revalidation
    isEmpty: !isLoading && !error && (!data || data.length === 0)
  };
}

// Export the fetcher for use in getServerSideProps
export { fetcher };
