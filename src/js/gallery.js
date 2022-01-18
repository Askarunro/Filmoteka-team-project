import DataFetch from './filmServiceApi.js';
import { renderMovieCardFilms } from './normaliseRenderFilm';
const dataFetch = new DataFetch();
import { tuiPagination } from './paginationGallery';

window.addEventListener('load', loadTrendingFilms);
// ========================ЗАГРУЗКА ПОПУЛЯРНЫХ ФИЛЬМОВ====================
async function loadTrendingFilms() {
  await DataFetch.fetchGenres();
  await dataFetch.fetchTopFilms().then(films => {
    renderMovieCardFilms(films);
  });
  tuiPagination();
}
