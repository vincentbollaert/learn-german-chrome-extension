import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query/react'

export const learnGermanApi = createApi({
  reducerPath: 'learnGermanApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder: any) => ({
    getDictionary: builder.query({
      query: (length = 20) => `dictionary?length=${length}`,
    }),
  }),
})

export const { useGetDictionaryQuery } = learnGermanApi
