import { gql } from '@apollo/client'

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

export const queryCharacterPagination = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
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
