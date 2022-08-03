import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import YTSearch from 'youtube-api-search';
import SearchResoult from "./components/SearchResoult";
import { useState } from "react";


const API_KEY = 'AIzaSyD_O8RHyxSM2NoZVa_9NbYEweKabke5h_c';


function App() {
  const [videoList , setVideoList] = useState([]);
  
  const serachVideo = (keyword) =>{
    console.log(keyword)
    YTSearch({key : API_KEY , term : keyword} , function(data){
      setVideoList(data)
    } )

    console.log(videoList)

  }
  return (
    <div>
      <header>
       <Navbar/>
       <SearchBar getKeyword={serachVideo}/>
       <SearchResoult items={videoList}/>
      </header>
    </div>
  );
}

export default App;
