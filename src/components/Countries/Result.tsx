import React from 'react'

type Props = {
  country: any
}

export const Result: React.FC<Props> = ({ country }) => (
  country && <div className='flex flex-col w-1/2'>
    <div className='px-10 text-xl font-bold'>
      Results:
    </div>
    <div className='px-10'>
      <div>
        <div id="contryName"><b>Name:</b> {country.name}</div>
        <div id="capital"><b>Capital:</b> {country.capital}</div>
        <div><b>Currency:</b> {country.currency}</div>
      </div>
      <div><b>Langauages:</b> {
        country.languages.map(l => l.name).join(", ")}
      </div>
    </div>
  </div>
)
