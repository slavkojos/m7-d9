export const fetchSongsList = async (query: string) => {
  const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};
