import type {Query} from '@tanstack/react-query'
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {AxiosError} from 'axios'
import type {ReactNode} from 'react'
import {ErrorNotification} from '~/components/common/Notifications'

const handleCacheError = (error: AxiosError, query: Query) => {
  if (query.state.data !== undefined) {
    if (error instanceof AxiosError) {
      ErrorNotification({code: error.code, msg: error.message})
    }
  }
}

const mutationCache = new MutationCache({
  onError: (error, query) =>
    handleCacheError(error as AxiosError<unknown>, query as Query),
})

const queryCache = new QueryCache({
  onError: (error, query) =>
    handleCacheError(error as AxiosError<unknown>, query),
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
      staleTime: 30000,
      refetchInterval: false,
    },
  },
  mutationCache,
  queryCache,
})

export default function QueryWrapper({children}: {children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
