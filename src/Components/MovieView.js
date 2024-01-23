import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DefaultImage = (e) => {
    const notFound = require('./DefaultImage.jpg')
    e.target.src = notFound
          }
    
const MovieView = () => { 
const { id } = useParams()  //useParams automatically gets the parameters from url here it fetches id from the path- /movie/:id
console.log(id)
const [movieDetails, setMovieDetails] = useState({})
const [isLoading, setIsLoading] = useState(true)

useEffect( () => {
    console.log('make an api request',id)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7b5ff1152fc082aee31e94cdbb99ce0c`)
    .then(response => response.json())
    .then(data => {
            setMovieDetails(data)
            console.log(data)
            setIsLoading(false) //IsLoading state is used to display that its loading data if the fetch is taking too long before displaying the data

    })
}, [id])


function renderMovieDetails() {

    const PosterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    const backdropUrl = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
    if(isLoading) {
        return <Hero text="Loading..." />
    }
    if(movieDetails) {
        return(
        <>
        <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-3">
                    <img src={PosterPath} alt="..." className="img-fluid shadow rounded" onError={DefaultImage}/>
                </div>
                <div className="col-lg-9">
                    <h2>{movieDetails.original_title}</h2>
                    <p className="lead">{movieDetails.overview}</p>
                </div>
            </div>
        </div>
        </>
        )
    }
    
}
  return renderMovieDetails()
};

export default MovieView;
