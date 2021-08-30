import { gql  } from '@apollo/client'

export const LIST_COUNTRIES = gql`
  query getCountriesList {
    countries {
      name
      code
    }
  }
`;