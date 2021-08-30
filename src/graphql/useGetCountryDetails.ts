import { gql  } from 'graphql-tag'

export const GET_COUNTRY = gql`
  query getCountryDetails ($code: ID!) {
    country (code: $code) {
      name
      currency
      capital
      languages {
        code
        name
      }
    }
  }
`;