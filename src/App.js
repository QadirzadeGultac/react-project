import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Movie from './Components/Movie';
import Favorite from './Components/Favorite';
import { useState } from 'react';

function App() {
  const [listName, setListName] = useState(""); 
  const [imbd, setImbd] = useState([]);
  const [listMovieName, setListMovieName] = useState([]);

  return (
    <div>
      <Routes>
        <Route 
          path='/' 
          element={
            <Movie 
              listName={listName} 
              setListName={setListName} 
              movieName={listMovieName} 
              setMovieName={setListMovieName} 
              imbdLink={imbd} 
              setImbdLink={setImbd}
            />
          } 
        />
        <Route 
          path='/favorite' 
          element={
            <Favorite 
              favorites={listName} 
              movieNames={listMovieName} 
              movieNameDelet={setListMovieName} 
              imbdLinkDelete={setImbd} 
              imbdlink={imbd} 
            />
          } 
        />
      </Routes>
      </div>
  );
}

export default App;
