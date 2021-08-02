import Axios from 'axios'

export default class Network {
  constructor () {
    this.api_key = 'c79ee99246533da451af92bf868dc5b2'
  }

  axiosGetRequest(path) {
    return Axios(path)
  }

  getMoviesCollections() {
    return this.axiosGetRequest(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}&language=fr`)
      .then( response => {
        const genres = response.data.genres;
        // console.log(genres);
        return genres
      })
  }

  getMoviesListsWithCollectionID(movie_list_id) {
    this.axiosGetRequest(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=${movie_list_id}&language=fr`)
      .then(response => {
        console.log(response.data.results);
      })
  }

  getMovie(movie_id) {
    this.axiosGetRequest(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.api_key}&language=fr`)
      .then(response => {
        console.log(response);
      })
  }
}
