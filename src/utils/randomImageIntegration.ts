const PIXABAY_API_KEY = '46221791-2774b335b788da2634a1043a4';
const PIXABAY_API_URL = 'https://pixabay.com/api/';

export async function getRandomLandscapeImage() {
  const response = await fetch(`${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=landscape&image_type=photo&orientation=horizontal&per_page=200`);
  const data = await response.json();
  
  if (data.hits && data.hits.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.hits.length);
    return data.hits[randomIndex].largeImageURL;
  }
  return null;
}