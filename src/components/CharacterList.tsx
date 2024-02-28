import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { queryCharacterPagination } from '../gql/ramQuery'
import { CharactersResult } from '../types/CharacterTypes'
import CharacterCard from './CharacterCard'
import { Link } from 'react-router-dom'
import PaginationList from './PaginationList'
import Spinner from './ui/spinner'

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { loading, error, data } = useQuery<CharactersResult>(
    queryCharacterPagination,
    {
      variables: { page: currentPage },
    }
  )
  if (error) return <p>{error.message}</p>
  return (
    <main>
      <h1 className='text-center text-3xl mb-5 mt-5'>Rick and Morty info 🚀</h1>
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
      <PaginationList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  )
}

export default CharacterList
