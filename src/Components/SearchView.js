import { Link } from "react-router-dom";
import Hero from "./Hero";


const DefaultImage = (e) => {

    const notFound = require('./DefaultImage.jpg')
    // e.target.src = 'https://image.tmdb.org/t/p/w500/izuJ7cUhcihFnTpfsdSnkMCHsRQ.jpg';
    // e.target.src = 'https://plus.unsplash.com/premium_photo-1682125311959-a000535c0b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60'
    e.target.src = notFound
  }

const MovieCard = ({movie}) =>
{

    const posteUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movie/${movie.id}`
    return( 
        // {<div className="col-lg-3 col-md-3 col-2 my-4" > } 
        <div className="col-sm-3 my-4" >   

        <div className="card">
        <img src={posteUrl} className="card-img-top" alt={movie.original_title} onError={DefaultImage}/>
        <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
        </div>
        </div>
        </div>
        )
}

const SearchView = ({keyword, searchResults}) => {

    const title = `You are searching for ${keyword}`
    // console.log(searchResults, 'are the search results');
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />  
    })
//map function is used to iterate the array objects using object and index values
//every returning value should be associated with a key
function renderResults() {
if(searchResults.length === 0){ 
    return (
        <>
            <Hero text={title}/>
            <div className="container p-5">
            <div className="row">
                <h1>Oops! No results found</h1>
            </div>
            </div> 
            </>
            )
        }
    else
    {
        return(
            <> 
            <Hero text={title}/>
            <div className="container">
                <div className="row">
                     {resultsHtml}
                </div>
            </div>
            </>
            )
            }
    }
    return renderResults();
}


export default SearchView;