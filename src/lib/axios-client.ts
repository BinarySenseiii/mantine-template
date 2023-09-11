import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { env } from '~/env.mjs'

const RICK_MORTY_BASEURL = 'https://rickandmortyapi.com/api'

const URLS = {
	development: RICK_MORTY_BASEURL,
	production: RICK_MORTY_BASEURL,
}

const responseBody = <T>(response: AxiosResponse<T>) => response.data

export const options = {
	headers: { 'content-type': 'application/json' },
}

const createInstance = (baseURL: string, options: AxiosRequestConfig = {}) =>
	axios.create({ baseURL, ...options })

export const request = {
	rickMorty: createInstance(URLS[env.NODE_ENV], {}),
}

export const requestActions = {
	get: <T>(instance: AxiosInstance, url: string, config: AxiosRequestConfig = {}) =>
		instance.get<T>(url, config).then(responseBody),

	post: <T>(instance: AxiosInstance, url: string, body: unknown) =>
		instance.post<T>(url, body).then(responseBody),
}
