/*
 * pages/index.tsx
 * Description: The "homepage", so to speak.
 * Copyright (c) 2021 PredictiveUX
 */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import IAlbum from './../__data__/iAlbum'
import { GridRowData} from '@material-ui/data-grid'
import { AlbumTable, FilterInput, PageTitle, CountrySelect } from 'components/'
import css from 'styles/Home.module.css'
import axios from 'axios'

const Home = (): JSX.Element => {
  const [albumData, setAlbumData] = useState<IAlbum[]>([])
  const [filter, setFilter] = useState('')
  const [country, setCountry] = useState('All')
  const [dataRows, setDataRows] = useState<GridRowData[]>([])
  const [countries, setCountries] = useState<string[]>([])

  useEffect(() => {
    loadAlbums()
  }, [])

  useEffect(() => {
      if (albumData.length > 0) {
            const rows =  processData(albumData)
            setDataRows(rows)
            distinctCountries(albumData)
      }
  }, [albumData])



  useEffect(() => {
      const rows =  processData(albumData)
            const fewerRows:GridRowData[] = filterRows(rows);
            const evenFewerRows:GridRowData[] = selectByCountry(fewerRows);
            setDataRows(evenFewerRows)

  },[country,filter])



      function processData(records: IAlbum[]) {
      let rows: GridRowData[] = []
      let counter = 1
      if (records !== null)
        records.forEach((val: IAlbum) => {
          const row = {
            id: counter,
            col1: val.country,
            col2: val.rank,
            col3: val.artist,
            col4: val.album,
            col5: val.year,
            col6: val.sold
          }
          rows.push(row)
          counter++
        })
      return rows
      }

    function distinctCountries(records: IAlbum[]) {
      let list: string[] = records.map((r) => {
        return r.country
      })
      const distinctCountries: string[] = [...new Set(list)]
      distinctCountries.unshift('All')
      setCountries(distinctCountries)
    }

  function selectByCountry(filteredRows: GridRowData[]) {
    if (country === 'All') {
     return filteredRows;
    }else {
      const found = filteredRows.filter((d) => d.col1 === country)
      return found
    }
  }

function filterRows(gridRows: GridRowData[]){
      if (filter == '') {
           return gridRows;
      } else {
            const found = gridRows.filter(
                    (d) =>
                      d.col3.toLowerCase().includes(filter.toLowerCase()) ||
                      d.col4.toLowerCase().includes(filter.toLowerCase())
                  )
      return found;
      }
}

 

  function handleFilterChange(nextChar: string) {
    setFilter(nextChar)
  }

  function handleCountryChange(value: string) {
    setCountry(value)
  }

  async function loadAlbums() {
    try {
      const result = await axios.get<IAlbum[]>('http://localhost:3000/api/albums')
      setAlbumData(result.data)
    } catch (error) {
      console.log('unable to fetch records')
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>PUX: Candidate Coding Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={css.header}>
        <div>
          <img src='assets/pux_logo.png' alt='Predictive UX' />
        </div>
        <div className={css.title}>Candidate Coding Challenge</div>
      </div>
      <div className={css.container}>
        <PageTitle />
        <CountrySelect selected={country} data={countries} onSelect={handleCountryChange} />
        <FilterInput changeHandler={handleFilterChange} />
        <AlbumTable data={dataRows} />
      </div>
    </React.Fragment>
  )
}

export default Home
