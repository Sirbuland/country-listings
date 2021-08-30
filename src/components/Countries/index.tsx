import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { LIST_COUNTRIES } from '../../graphql/useCountriesList';
import { GET_COUNTRY } from '../../graphql/useGetCountryDetails';
import { transformObjectToLabel } from '../../helpers/transformDropDown';
import { DropDown } from './DropDown';
import { Result } from './Result';

const Countries: React.FC = () => {
  const [countries, setCountries] = useState([])
  const [getCountriesList, { data: dataListCountries, loading: isLoading }] = useLazyQuery(LIST_COUNTRIES)
  const [getCountryDetails, { data: countryDetails, loading: countryLoading }] = useLazyQuery(GET_COUNTRY)

  useEffect(() => {
    getCountriesList({})
  }, [])

  useEffect(() => {
    if (dataListCountries) {
      setCountries(transformObjectToLabel(dataListCountries.countries))
    }
  }, [dataListCountries])

  const loadData = (selectedCountry) => {
    getCountryDetails({
      variables: {
        code: selectedCountry ? selectedCountry.value : ''
      }
    })
  }
  return (
    <div className='container mx-auto'>
      <div id='title' className='my-10 font-bold text-2xl text-center'>Countries Drop Down</div>
      <div className='flex flex-row justify-center'>
        <DropDown
          countries={countries}
          onSelect={loadData}
          isLoading={isLoading || countryLoading}
        />
        {countryDetails &&
          <Result
            country={countryDetails.country}
          />
        }
      </div>
    </div>
  )
}

export default Countries
