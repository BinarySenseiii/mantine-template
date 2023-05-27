import {requestActions, request} from '~/lib/axios-client'
import type {AxiosRequestConfig} from 'axios'

const getRickData = <T>(endpoint: string, config: AxiosRequestConfig = {}) =>
  requestActions.get<T>(request.rickMorty, endpoint, config)

export default getRickData
