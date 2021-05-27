export const fetchSongsList = async (query: string) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
  const data = await response.json();
  return data.data;
};
