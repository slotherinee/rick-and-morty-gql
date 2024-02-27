import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './gql/graphqlClient.ts'
import App from './App.tsx'
import './index.css'
import CharacterCardInfo from './components/CharacterCardInfo.tsx'
import NotFound from './components/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: '/rick-and-morty-gql/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/rick-and-morty-gql/characters/:id',
    element: <CharacterCardInfo />,
    errorElement: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
