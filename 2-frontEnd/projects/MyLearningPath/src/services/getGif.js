const APIKey = "TOIM2eeHIc6UzzqOrOY3TSOxvssc4wvE";

export default function getGifs({ keyword }) {
  const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  return fetch(urlAPI)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((gif) => {
        return {
          id: gif.id,
          title: gif.title,
          url: gif.images.fixed_width_downsampled.url,
        };
      });
      return gifs;
    });
}
