import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Requests";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />

      <Banner />

      <Row
        title='NETFLIX ORIGNALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movie' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movie' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movie' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic Movie' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
