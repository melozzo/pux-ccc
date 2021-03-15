
import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components'

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

const SelectContainer = styled.div`
  width:500px;
`

type SelectProps = {
      data:string[];
      onSelect: ( item:any) =>void
      selected:string
    }
    
    const CountrySelect: React.FC<SelectProps> =  ( {data, onSelect, selected}: SelectProps) : JSX.Element => {


      return(
                  <SelectContainer>
                          <Instructions>Use this select  choose albums by country...</Instructions>
                              <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={selected}
                              onChange={e=>{onSelect(e.target.value)} }
                              >
                              {
                                    data.map( item=>{
                                          return <MenuItem value={item}>{item}</MenuItem>
                                    })
                              }
                        </Select>
                  </SelectContainer>

      )


}

export default CountrySelect;
