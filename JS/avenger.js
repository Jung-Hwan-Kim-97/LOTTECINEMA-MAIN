import axios from "axios";
export {
  avengers
}

function avengers() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
    .then(res => {
      console.log(res)
      const inputEl = document.querySelector('.movie-search .search-bar [type=text]')
      console.log(inputEl)
      const searchButton = document.querySelector('.movie-search .search-bar button')
      console.log(searchButton)
      const movieAvengers = document.querySelector('.avengers')

      const avengers1Y = document.querySelector('.avengers1--Y')
      const avengers1P = document.querySelector('.avengers1--P')
      const avengers1T = document.querySelector('.avengers1--T')

      const avengers2Y = document.querySelector('.avengers2--Y')
      const avengers2P = document.querySelector('.avengers2--P')
      const avengers2T = document.querySelector('.avengers2--T')

      const avengers3Y = document.querySelector('.avengers3--Y')
      const avengers3P = document.querySelector('.avengers3--P')
      const avengers3T = document.querySelector('.avengers3--T')

      const avengers4Y = document.querySelector('.avengers4--Y')
      const avengers4P = document.querySelector('.avengers4--P')
      const avengers4T = document.querySelector('.avengers4--T')

      const avengers5Y = document.querySelector('.avengers5--Y')
      const avengers5P = document.querySelector('.avengers5--P')
      const avengers5T = document.querySelector('.avengers5--T')

      searchButton.addEventListener('click', () => {
        if (inputEl.value === 'avengers' || inputEl.value === 'Avengers' || inputEl.value === 'AVENGERS') {
          movieAvengers.style.display = 'flex'

          avengers1Y.textContent = res.data.Search[0].Year
          avengers1P.src = res.data.Search[0].Poster
          avengers1T.textContent = res.data.Search[0].Title

          avengers2Y.textContent = res.data.Search[1].Year
          avengers2P.src = res.data.Search[1].Poster
          avengers2T.textContent = res.data.Search[1].Title

          avengers3Y.textContent = res.data.Search[2].Year
          avengers3P.src = res.data.Search[2].Poster
          avengers3T.textContent = res.data.Search[2].Title

          avengers4Y.textContent = res.data.Search[3].Year
          avengers4P.src = res.data.Search[3].Poster
          avengers4T.textContent = res.data.Search[3].Title

          avengers5Y.textContent = res.data.Search[4].Year
          avengers5P.src = res.data.Search[4].Poster
          avengers5T.textContent = res.data.Search[4].Title
        } else {
          movieAvengers.style.display = 'none'
        }
      })
    })
}