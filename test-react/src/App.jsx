import { useEffect, useState } from 'react'
import './App.css'
import { Events } from './Event';
import HomePage from './HomePage';
import PorcelainPage from './PorcelainPage';
import { Page404 } from './Page404';
import { Router } from './Router';


const routes = [
    {
      path:"/",
      Component: HomePage
    },
    {
      path:"/porcelain",
      Component: PorcelainPage
    },
    {
      path:"/search/:query",
      Component: ({routeParams}) => <h1>Has buscado {routeParams.query}</h1>
    }
  ]
  function Search(){
    return <h2>Buscador</h2>
  }
  

  

function App() {

  return (
    <>
      <Router routes={routes} defaultComponent={Page404}/>
    </>
  )
}

export default App
