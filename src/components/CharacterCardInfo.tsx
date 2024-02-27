import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { queryCharacter } from '../gql/ramQuery'
import Spinner from './ui/spinner'
import { FaArrowLeft } from 'react-icons/fa'

const CharacterCardInfo = () => {
  let { id } = useParams()
  const { loading, error, data } = useQuery(queryCharacter, {
    variables: { id },
  })

  if (error) return <p>{error.message}</p>
  if (loading || !data) return <Spinner />

  const { character } = data

  const imageStyle = {
    filter: character.status === 'Dead' ? 'grayscale(100%)' : 'none',
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img
        src={character.image}
        alt={character.name}
        className='w-32 h-32 rounded-full mb-4'
        style={imageStyle}
      />
      <h1 className='text-2xl font-bold mb-2'>Character Details</h1>
      <h2 className='text-lg font-semibold mb-2'>ID: {id}</h2>
      <h3 className='text-base mb-2'>Name: {character.name}</h3>
      <h4 className='text-base mb-2'>Status: {character.status}</h4>
      <h5 className='text-base mb-2'>Species: {character.species}</h5>
      <p className='text-base'>Location: {character.location.name}</p>
      <Link to={'/'}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-10 flex items-center'>
          <FaArrowLeft className='mr-2' />
          Go back
        </button>
      </Link>
    </div>
  )
}

export default CharacterCardInfo
