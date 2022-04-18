
import React,{useEffect, useState}   from 'react'; 
import './App.css';
// import  {getPhoto}  from './api/Photo';
import searchIcon from './search.svg'
import MovieCard from './MovieCard/MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e889523a';
const App = () => {
const [movies,setMovies]=useState([]) 
const [searchTerm,setSearchTerm]=useState('')

  const searchMovie = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await (response.json())
    setMovies(data.Search)
  }
  
  useEffect(()=>{
    searchMovie()
    },[])




  return (
    <div className='app' >
      <h1>MoveLand</h1>
      <div className='search'>
        <input
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img
        src={searchIcon}
        alt='search'
        onClick={()=> searchMovie(searchTerm)}
        />
      </div>
      {
        movies.length>0
        ? (
      <div className='container' >
      {movies.map((movie)=>(
        <MovieCard movie1={movie}/>
      ))}
      </div>

        ):(
          <div className='empty'>
            <h2>No Movie found</h2></div>
        )
      }
    </div>
  );
}

export default App;
