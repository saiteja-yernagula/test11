import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Folio from './Folio';
import Counter from './Counter';
import Calculator from './Calculator';








function App(){
  return (
    <>
    
    <div>
    <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Folio/>}/>
            <Route path='/counter' element={<Counter/>}/>

            <Route path='/calculator' element={<Calculator/>}/>


         </Routes>
    </BrowserRouter>
    <Counter/>
    </div>
    </>
    
  )
}

export default App
