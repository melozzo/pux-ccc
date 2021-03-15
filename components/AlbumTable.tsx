/*
 * components/AlbumTable.tsx
 * Description: Table displaying album information
 * Copyright (c) 2021 PredictiveUX
 */
import { DataGrid, GridRowsProp, GridColDef , GridRowData} from '@material-ui/data-grid';
import { useEffect, useState} from 'react';
import styled from 'styled-components'
import IAlbum from './../__data__/iAlbum'

import css from 'styles/Home.module.css'


const Wrapper = styled.div`
  margin-top: 20px;
`

type AlbumTableProps = {
  data: IAlbum[],
  filterTerm:string
}



const AlbumTable: React.FC<AlbumTableProps> = ({ data, filterTerm }: AlbumTableProps): JSX.Element => {

    useEffect( ()=>{
          if(data.length > 0)
      processData(data);
    },[data])

    useEffect(()=>{
          if(filterTerm == "")
          return;
          const found = data.filter( d => d.artist.toLowerCase().includes(filterTerm.toLowerCase()) || d.album.toLowerCase().includes(filterTerm.toLowerCase()));
            if(found !== undefined)
          processData(found)


    },[filterTerm])

    const [dataRows, setDataRows] = useState<GridRowData[]>([])

      const columns:GridColDef[] = [
            { field: 'col1', headerName:"Country", width: 150},
            {field: 'col2', headerName: "Rank", width: 150},
            {field: 'col3', headerName:"Artist", width:150},
            {field: 'col4', headerName: "Album", width: 150},
            {field: 'col5', headerName: "Year", width:150},
            {field: 'col5', headerName:"Sold", width:150}
      ];

      function processData(records:IAlbum[] ){
           
            let rows:GridRowData[]  = [];
            let  counter = 1;
            if(records !== null)
            records.forEach( (val:IAlbum)=>{
              
                  const row = {
                        id: counter,
                        col1: val.country,
                        col2: val.rank,
                        col3: val.artist,
                        col4: val.album,
                        col5: val.year,
                        col6: val.sold
                  }
                   rows.push(row);
                  counter++;
            })
            setDataRows(rows);
      }

      function filterData(){

      }


  return (
    <Wrapper>
    <div style={{ height: 600, width: '100%' }}>
       <DataGrid   rows={dataRows} columns = {columns} />
            </div>  
    
    </Wrapper>
  )
}

export default AlbumTable
