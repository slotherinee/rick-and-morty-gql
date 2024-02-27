import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound: React.FC = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>404. Oops!</h1>
      <p className='text-lg text-gray-600'>
        Sorry, an unexpected error has occurred.
        <i>{(error as Error).statusText || (error as Error).message}</i>
      </p>
      <Link to='/' className='text-blue-600 underline mt-4'>
        Go back to home
      </Link>
    </div>
  )
}

export default NotFound
