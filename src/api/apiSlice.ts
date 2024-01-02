import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../redux/store';

interface LoginRequest {
  email: string;
  password: string;
}


const initialState = {
  searchResults: [],
};

interface LoginResponse {
  access: string; 
  refresh: string;
}

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://back-wb-helper.ru/api/v1',
    prepareHeaders: (headers, { getState }) => {
      // Get the token from the current state
      const token = (getState() as RootState).auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } 
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/users/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    getAdverts: builder.query<any, { input?: string;}>({
      query: ({ input = '',}) => ({
        url: '/wb/adverts/',
        params: {type: 6, input },
      }),
    }),
    getCatalogs: builder.query<any, void>({
      query: () => '/wb/catalogs/',
    }),
    getCategoryPriorities: builder.query<CategoryPriorityType[], void>({
      query: () => '/path/to/subject_priorities',
    }),
  }),
});

export const { useLoginMutation, useLazyGetAdvertsQuery, useGetCatalogsQuery  } = apiSlice;