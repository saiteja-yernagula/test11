import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Calculator from './Calculator';
import Todo from './Todo';
import Counter from './Counter';
import Weather from './Weather';
import Crypto from './Crypto';

import Recipe from './Recipe';
import Pixabay from './Pixabay';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Search from './Search';
import Folio from './Folio';



function App (){
  return (
    <>
    
    
    <div>
    <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Folio/>}/>
            <Route path='/gallery' element={<Pixabay/>}/>
            <Route path='/gallery/search/:gdata' element={<Search/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
            <Route path='/weather' element={<Weather/>}/>
            <Route path='/crpyto' element={<Crypto/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/todo' element={<Todo/>}/>


         </Routes>
    </BrowserRouter>
    </div>
    </>
    
  )
}

export default App
