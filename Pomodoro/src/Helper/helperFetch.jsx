import React, { useEffect, useState } from 'react'

export const helperFetch = () => {
    
    const getFetch = (url) => {
        fetch(url)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const comeBack = {getFetch};
  return (comeBack);
}
