import { useQuery } from '@apollo/client'
import CharacterCard from './components/CharacterCard'
import { query } from './gql/ramQuery'
import { CharactersResult } from './types/CharacterTypes.ts'

export default function App() {
  const { loading, error, data } = useQuery<CharactersResult>(query)
  if (error) return <p>{error.message}</p>
  return (
    <div>
      <h1 className='text-center text-3xl mb-5'>My first Apollo app 🚀</h1>
      {loading ? (
        <div className='flex items-center justify-center h-screen'>
          <h1 className='text-3xl'>Loading...</h1>
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-4'>
          {data?.characters.results.map(character => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      )}
    </div>
  )
}
