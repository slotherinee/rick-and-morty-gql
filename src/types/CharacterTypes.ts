export type CharactersResult = {
  characters: {
    results: {
      id: string
      name: string
      image: string
      status: string
      species: string
      location: {
        name: string
      }
    }[]
  }
}

export type CharacterCardProps = {
  name: string
  image: string
  status: string
  id: string
  species: string
  location: { name: string }
}
