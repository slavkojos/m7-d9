export const fetchSongsList = async (query: string) => {
  const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

export const fetchTrack = async (id) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
