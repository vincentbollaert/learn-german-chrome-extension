import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query/react'

export const learnGermanApi = createApi({
  reducerPath: 'learnGermanApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder: any) => ({
    getDictionary: builder.query({
      query: () => 'dictionary',
    }),
  }),
})

export const { useGetDictionaryQuery } = learnGermanApi
