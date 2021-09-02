import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function Header (props) {
  return (
    <>
      <div className='Header'>
        <h1 className='MainTitle'>Las Noticias de Hoy</h1>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      </div>
    </>
  )
}
