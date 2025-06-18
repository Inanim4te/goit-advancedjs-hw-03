export async function fetchPics(query, key) {
  const params = new URLSearchParams({
    key: key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await fetch(`https://pixabay.com/api/?${params}`);
  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  return data;
}
