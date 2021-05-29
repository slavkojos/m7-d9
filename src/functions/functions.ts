export const fetchSongsList = async (query: string) => {
  const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

export const fetchTrack = async (id: string) => {
  try {
    const url = `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    //const tracklist = await getSongsFromTracklist(data.album.tracklist);
    console.log("data in func", data);
    return { data };
  } catch (error) {
    console.log(error);
  }
};

export const getSongsFromTracklist = async (tracklistUrl: string) => {
  try {
    const response = await fetch(`https://thingproxy.freeboard.io/fetch/${tracklistUrl}`);
    const data = await response.json();
    console.log("tracklist data", data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
