import React from "react";
import ReactPlayer from "react-player/youtube";

function ShowVideo({ toPlay }) {
    console.log(toPlay)
  return (
    <div className="col-md-7">
      <div className="card">
      <h3 className="m-2">{toPlay.snippet.title}</h3>
      <hr/>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${toPlay.id.videoId}`}
        
        width='100'
         config={{
    youtube: {
      playerVars: { showinfo: 1 }
    }}} />
    <p className="m-2">{toPlay.snippet.description}</p>
      </div>
    </div>
  );
}

export default ShowVideo;
