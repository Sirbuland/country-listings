import React, { useState } from 'react'
import Select from 'react-select'
import { ERROR_MESSAGES } from '../../constants/Messages'
import { customStyles } from './styles'

type Props = {
  countries: any[],
  onSelect: any
  isLoading: boolean
}

export const DropDown: React.FC<Props> = ({ countries, onSelect, isLoading }) => {
  const [showOptions, setShowOptions] = useState(false)
  const checkInputLength = (e) => {
    if (e.length > 2) {
      setShowOptions(true)
    } else {
      showOptions && setShowOptions(false)
    }
  }

  return (
    <div className='px-10 w-1/2' data-testid='select'>
      <Select
        isClearable
        noOptionsMessage={() => ERROR_MESSAGES.DROP_DOWN_MESSAGE}
        styles={customStyles}
        onInputChange={checkInputLength}
        options={showOptions ? countries : []}
        isLoading={isLoading}
        placeholder={ERROR_MESSAGES.DROP_DOWN_PLACEHOLDER}
        onChange={onSelect}
      />
    </div>
  )
}
