import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import axios from 'axios'

const RICK_MORTY_BASEURL = 'https://rickandmortyapi.com/api'
const NEXT_API_BASEURL = '/api'

/* export const urls = {
  test: `http://localhost:3334`,
  development: 'https://rickandmortyapi.com/api',
  production: NO_CODE_API_BASEURL,
} */

const responseBody = <T>(response: AxiosResponse<T>) => response.data

export const options = {
	headers: {'content-type': 'application/json'},
}

const createInstance = (baseURL: string, options: {}) =>
	axios.create({baseURL, ...options})

export const request = {
	// rickMorty: createInstance(RICK_MORTY_BASEURL, options),
	rickMorty: createInstance(RICK_MORTY_BASEURL, {}),
	nextAPi: createInstance(NEXT_API_BASEURL, {}),
}

export const requestActions = {
	get: <T>(
		instance: AxiosInstance,
		url: string,
		config: AxiosRequestConfig = {},
	) => instance.get<T>(url, config).then(responseBody),

	post: <T>(instance: AxiosInstance, url: string, body: {}) =>
		instance.post<T>(url, body).then(responseBody),
}
