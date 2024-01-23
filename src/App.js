import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import About from './Components/About';
import SearchView from './Components/SearchView';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieView from './Components/MovieView';
import PageNotFound from './Components/PageNotfound';



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect( () => {
    if(searchText) //if search text has some text
    {
      console.log(searchText, "is the search text")

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=7b5ff1152fc082aee31e94cdbb99ce0c&language=en-US&query=${searchText}&page=1&include_adult=false`)
          .then(response => response.json())
          .then(data => {
            setSearchResults(data.results)
          })
    } 
  }, [searchText])
  //whenever searchText is updated useEffect is executed and updates the searchResults by fetching data with searchText


  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
         {
          // <Route path="/about" component={About} />
        }
        <Route path="/search" exact>
          <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route>
        <Route path="/movie/:id" component={MovieView} />
        <Route path="*" component={PageNotFound} />
        </Switch>

    </div>
  );

}

export default App;
