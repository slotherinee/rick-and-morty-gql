import { useQuery } from '@apollo/client'
import CharacterCard from './components/CharacterCard'
import { query } from './gql/ramQuery'
import { CharactersResult } from './types/CharacterTypes.ts'
import { Link } from 'react-router-dom'
import Spinner from './components/ui/spinner.tsx'

export default function App() {
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
            <Link
              to={`/rick-and-morty-gql/characters/${character.id}`}
              key={character.id}
            >
              <CharacterCard key={character.id} {...character} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
