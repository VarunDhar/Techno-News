import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export const Footer = () => {

    const {page,handleClick,totalPages} = useContext(AppContext);
  return (
    <div className='footer'>
        {page>1 && <button className='button mr-1' onClick={()=>{
            handleClick(page-1);
        }}>Previous</button>}
        {page<totalPages && <button onClick={()=>{
            handleClick(page+1);
        }} className='button mr-3'>Next</button>}
        Page {page} of {totalPages}
    </div>
  )
}
