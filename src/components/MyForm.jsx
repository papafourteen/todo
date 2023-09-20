import React from 'react'
import { TextField } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
import { addTodo } from '../utils';

export const MyForm = () => {
    const [input,setInput]=useState('')
    //console.log(input);
  return (
    <div className='form'>
        <TextField className="input" id="outlined-basic" 
            label="new todo..." 
            variant="outlined" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
        <AddBoxIcon sx={{fontSize:'3.5rem',color:'green'}}
            onClick={()=>addTodo(input)}
        />
    </div>
  )
}
