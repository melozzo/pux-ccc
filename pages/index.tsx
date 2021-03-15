/*
 * pages/index.tsx
 * Description: The "homepage", so to speak.
 * Copyright (c) 2021 PredictiveUX
 */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Axios from 'axios';
import IAlbum from './../__data__/iAlbum'

import { AlbumTable, FilterInput, PageTitle } from 'components/'

import css from 'styles/Home.module.css'
import axios from 'axios'

const Home = (): JSX.Element => {
      const [albumData, setAlbumData] = useState<IAlbum[]>([]);
      useEffect(() => {
           loadAlbums();
            
      }, [])

async function loadAlbums(){
      let result;
        try{
                  const result =  await axios.get<IAlbum[]>("http://localhost:3000/api/albums");
               
                  setAlbumData(result.data)
        }catch(error){
              console.log("unable to fetch records")
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
        <FilterInput />
        <AlbumTable data={albumData} />
      </div>
    </React.Fragment>
  )
}

export default Home
