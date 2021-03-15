/*
 * components/AlbumTable.tsx
 * Description: Table displaying album information
 * Copyright (c) 2021 PredictiveUX
 */
import { DataGrid,  GridRowData, GridColDef } from '@material-ui/data-grid';
import styled from 'styled-components'

import css from 'styles/Home.module.css'


const Wrapper = styled.div`
  margin-top: 20px;
`

type AlbumTableProps = {
  data: GridRowData[]
  
}



const AlbumTable: React.FC<AlbumTableProps> = ({ data}: AlbumTableProps): JSX.Element => {

      const columns:GridColDef[] = [
            { field: 'col1', headerName:"Country", width: 150},
            {field: 'col2', headerName: "Rank", width: 150},
            {field: 'col3', headerName:"Artist", width:150},
            {field: 'col4', headerName: "Album", width: 150},
            {field: 'col5', headerName: "Year", width:150},
            {field: 'col6', headerName:"Sold", width:150, type:'number'}  
      ];



  return (
    <Wrapper>
        
    <div style={{ height: 600, width: '100%' }}>
       <DataGrid   rows={data} columns = {columns} />
            </div>  
    
    </Wrapper>
  )
}

export default AlbumTable
