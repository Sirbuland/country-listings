const transformObjectToLabel = (countries:any) => {
  if (Array.isArray(countries) && countries.length) {
    return countries.map(country =>{
      return  {
        label: country.name,
        value: country.code,
        key: country.code
      }
    })
  }else if (countries) {
    return {
      label: countries.name,
      value: countries.code,
      key: countries.code,
    }
  }

  return countries
}

export {
  transformObjectToLabel
}