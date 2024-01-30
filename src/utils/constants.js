
const apiId = "475149b12ecbec15610e651b7ebae058";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzUxNDliMTJlY2JlYzE1NjEwZTY1MWI3ZWJhZTA1OCIsInN1YiI6IjY1YjVlMTZkMWM2MzViMDE3YjE0MmZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2pQ-WkZW4iVVDXN3ZkmIxU2xxNJio5P9q49YBR_eMo",
  },
};

const posterImg = (img) =>
  `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${img}`;
export {options,apiId,posterImg}