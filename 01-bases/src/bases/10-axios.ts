import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

// https://api.giphy.com/v1/gifs/random?api_key=${apiKey}

const apiKey = "4ahzDrQiduLU0UaglSPTOsjeY2eTSFlU";

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

export default giphyApi;

// giphyApi
//   .get<GIFResponse>("/random")
//   .then((resp) => console.log(resp.data.data))
//   .catch((error) => console.log(error));
