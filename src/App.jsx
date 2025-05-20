import { useState, useEffect } from "react"
import axios from "axios"
import 'flag-icons/css/flag-icons.min.css'

function App() {
  const [films, setFilms] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const filterMovies = (title) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=54b9f378fd5384807b6cbb4b453b6528&query=${title}&language=it-IT`).then((res) => {
      setFilms(res.data.results);
    });
  }

const handleChange = (e) => {
  setSearchTitle(e.target.value);
}
const handleSubmit = (e) => {
  e.preventDefault();
  filterMovies(searchTitle);
  setSearchTitle("");
}

  return (
    <>
      <div className="container-fluid">
        <header>
          <div className="">
            <div className="row justify-content-between">
              <div className="col-3">logo</div>
              <div className="col-4">
                <form className="imput-group d-flex" onSubmit={handleSubmit}>
                  <input 
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={handleChange}
                  value={searchTitle}
                  />
                  <button 
                  className="btn btn-primary"
                  type="submit"
                  >Aggiungi</button>
                </form>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="row g-3">
            {films.map((film) => (
              <div className="col-4" key={film.id}>
                <div className="card">
                  <div className="card-img">
                    <img src="" alt="" />
                  </div>
                  <div className="card-body">
                    <h3>{film.title}</h3>
                    <p>{film.original_title}</p>
                    <p>{
                    film.original_language === "it" ? <span className="fi fi-it flag"></span> : <span className="fi fi-us flag"></span>
                    }</p>
                    <p>{film.vote_average}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
