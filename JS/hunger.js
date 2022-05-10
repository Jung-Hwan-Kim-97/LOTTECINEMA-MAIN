import axios from "axios";
export {hungerSeries}

function hungerSeries() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=hunger')
    .then(res => {
      const inputEl = document.querySelector('.movie-search .search-bar [type=text]')
      console.log(inputEl)
      const searchButton = document.querySelector('.movie-search .search-bar button')
      console.log(searchButton)
      searchButton.addEventListener('click', () => {
        const movieHunger = document.querySelector('.hunger')

        const hunger1Y = document.querySelector('.hunger1--Y')
        const hunger1P = document.querySelector('.hunger1--P')
        const hunger1T = document.querySelector('.hunger1--T')

        const hunger2Y = document.querySelector('.hunger2--Y')
        const hunger2P = document.querySelector('.hunger2--P')
        const hunger2T = document.querySelector('.hunger2--T')

        const hunger3Y = document.querySelector('.hunger3--Y')
        const hunger3P = document.querySelector('.hunger3--P')
        const hunger3T = document.querySelector('.hunger3--T')

        const hunger4Y = document.querySelector('.hunger4--Y')
        const hunger4P = document.querySelector('.hunger4--P')
        const hunger4T = document.querySelector('.hunger4--T')

        const hunger5Y = document.querySelector('.hunger5--Y')
        const hunger5P = document.querySelector('.hunger5--P')
        const hunger5T = document.querySelector('.hunger5--T')

        if (inputEl.value === "hunger" || inputEl.value === "Hunger" || inputEl.value === "HUNGER" ) {
          movieHunger.style.display = 'flex'

          hunger1Y.textContent = res.data.Search[0].Year
          hunger1P.src = res.data.Search[0].Poster
          hunger1T.textContent = res.data.Search[0].Title

          hunger2Y.textContent = res.data.Search[1].Year
          hunger2P.src = res.data.Search[1].Poster
          hunger2T.textContent = res.data.Search[1].Title

          hunger3Y.textContent = res.data.Search[2].Year
          hunger3P.src = res.data.Search[2].Poster
          hunger3T.textContent = res.data.Search[2].Title

          hunger4Y.textContent = res.data.Search[3].Year
          hunger4P.src = res.data.Search[3].Poster
          hunger4T.textContent = res.data.Search[3].Title

          hunger5Y.textContent = res.data.Search[4].Year
          hunger5P.src = res.data.Search[4].Poster
          hunger5T.textContent = res.data.Search[4].Title
        } else {
          movieHunger.style.display = 'none'
        }
      })
    })
}

