import BandsiteAPI from "./band-site-api.js";


const api_key= "f735125b-025d-4208-8ff7-1e6deeae76c9";
const baseURL = "https://project-1-api.herokuapp.com/"
const showsURL = `${baseURL}showdates?api_key=${api_key}`;
const shows = new BandsiteAPI(showsURL);
shows.getShows();
