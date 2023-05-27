import {useQuery} from '@tanstack/react-query'
import getRickData from '../client'
import {CHARACTERS_CACHE_KEY, CHARACTERS_ENDPOINT} from '../constants'

const useCharacters = () =>
  useQuery({
    queryKey: [CHARACTERS_CACHE_KEY],
    queryFn: () => getRickData(CHARACTERS_ENDPOINT),
    staleTime: 30000,
  })

export default useCharacters
