// apikey giphy: 4ahzDrQiduLU0UaglSPTOsjeY2eTSFlU

import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = "4ahzDrQiduLU0UaglSPTOsjeY2eTSFlU";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((response) => response.json())
  .then((body: GIFResponse) => console.log(body.data.images.downsized_medium.url))
  .catch((error) => console.info(error));



