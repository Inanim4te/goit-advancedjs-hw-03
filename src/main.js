import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPics } from './js/pixabay-api';
import { renderPics } from './js/render-functions';

const formEl = document.getElementById('search-form');
const inputEl = document.getElementById('searchQuery');
const loaderEl = document.querySelector('.loader');
const galleryEl = document.querySelector('.gallery');

const API_KEY = '33649719-b7fecbfe979c6e7e0b54f5aa7';

export const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formEl.addEventListener('submit', async e => {
  e.preventDefault();

  const query = inputEl.value.trim();
  if (!query) return;
  inputEl.value = '';

  galleryEl.innerHTML = '';
  loaderEl.style.display = 'block';

  try {
    const data = await fetchPics(query, API_KEY);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderPics(data);
    galleryLightbox.refresh();
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    loaderEl.style.display = 'none';
  }
});
