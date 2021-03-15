/*
 * components/FilterInput.tsx
 * Description: Component used for filtering data
 * Copyright (c) 2021 PredictiveUX
 */
import styled from 'styled-components'
import React from 'react';
import css from 'styles/Home.module.css'

/** styled components here */
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`

const Instructions = styled.div`
  margin-right: 10px;
`

/**
 * We presume you'll need some kind of change handler to listen to inputs
 */
type FilterInputProps = {
  changeHandler: (filterChar:string) => void
}

const FilterInput: React.FC<FilterInputProps> =  ( {changeHandler}: FilterInputProps) : JSX.Element => {
  return (
    <Wrapper>
      <Instructions>Use this input to filter data...</Instructions>
      <input type='text' className={css.filterInput}  onChange={ e =>{ changeHandler(e.target.value)} }/>
    </Wrapper>
  )
}

export default FilterInput
