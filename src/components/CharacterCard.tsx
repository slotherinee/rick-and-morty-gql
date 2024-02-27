import { CharacterCardProps } from '../types/CharacterTypes.ts'

const CharacterCard = ({
  name,
  image,
  status,
  species,
  location,
}: CharacterCardProps) => {
  return (
    <div className='flex m-3 bg-gray-300 rounded-xl'>
      <img
        src={image}
        alt={name}
        className='rounded-xl'
        width='200'
        height='200'
      />
      <div className='m-3'>
        <h3 className='text-xl mb-3'>{name}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Location: {location.name}</p>
      </div>
    </div>
  )
}

export default CharacterCard
