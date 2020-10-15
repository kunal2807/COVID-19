import React from 'react';
import { Preloader } from 'react-materialize';

export const spinner = ()=>{
  return(
    <Preloader
      active
      flashing
      color="blue"
      size="small"
    />
  )
}