import { LIST_COUNTRIES } from "../graphql/useCountriesList";
import { GET_COUNTRY } from "../graphql/useGetCountryDetails";

const countriesMockedData = {
  request: {
    query: LIST_COUNTRIES,
  },
  result: {
    data: { countries: [{ code: "NZ", name: 'New Zealand' }] },
  },
};

const countryMockData = {
  request: {
    query: GET_COUNTRY,
    variables: { code: 'NZ' },
  },
  result: {
    data: {
      country: [
        {
          name: 'New Zealand',
          currency: 'NZ',
          capital: 'NEW ZEALAND',
          langauges: [
            {
              code: 'fr',
              name: 'France'
            }
          ]
        }
      ] 
    },
  },
}
export {
  countriesMockedData,
  countryMockData
}