import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 6000,
      refetchOnWindowFocus: false,
      useErrorBoundary: (error) => error.response?.status >= 500,
    },
  },
});

export const QeuryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
