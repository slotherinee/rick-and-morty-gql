import { useQuery } from '@apollo/client'
import Spinner from './ui/spinner'
import { CharactersResult } from '../types/CharacterTypes'
import CharacterCard from './CharacterCard'
import { Link } from 'react-router-dom'
import { query } from '../gql/ramQuery'

const CharacterList = () => {
  const { loading, error, data } = useQuery<CharactersResult>(query)
  if (error) return <p>{error.message}</p>
  return (
    <div>
      <h1 className='text-center text-3xl mb-5'>Rick and Morty info 🚀</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-2 gap-4'>
          {data?.characters.results.map(character => (
            <Link to={`/characters/${character.id}`} key={character.id}>
              <CharacterCard key={character.id} {...character} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default CharacterList
