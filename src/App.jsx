import { useState } from 'react'
import './App.css'
/* Components */
import TabSelectorComponent from './Components/TabSelectorComponent'
import SearchComponent from './Components/SearchComponent'

function App() {

  return (
    <div className="App" style={{paddingTop:200}}>
      <div className="row justify-content-center gx-0">
        <div className="col-3">
          <TabSelectorComponent/>
        </div>
        <div className="col-2">
          <SearchComponent/>
        </div>
      </div>
    </div>
  )
}

export default App
