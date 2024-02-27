import { gql } from '@apollo/client'

export const query = gql`
  query getCharacters {
    characters {
      results {
        name
        image
        status
        id
        species
        location {
          name
        }
      }
    }
  }
`

export const queryCharacter = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      status
      id
      species
      location {
        name
      }
    }
  }
`