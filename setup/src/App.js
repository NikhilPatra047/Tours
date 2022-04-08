import React, { useState, useEffect, useContext } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import {useFetch} from "./useFetch.js"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

export const DeleteId = React.createContext();

function App() {
  const {tourData, loading, deleteTour} = useFetch(url);
  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
  return (
    <DeleteId.Provider value={{deleteTour}}>
      <main>
          <Tours tours={tourData} />
      </main>
    </DeleteId.Provider>
  )
}

export default App
