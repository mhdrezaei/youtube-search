import React from "react";
import SearchItem from "./SearchItem";

function SearchList({ videos , getId}) {
  const sendToShow = (id) => {
    getId(id)
  }
    return (
    <div className="col-md-5">
      <div className="card">
        <div className="list-group">
          {videos.map((video) => {
            return (
              <SearchItem
                key={video.id.videoId}
                id={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
                image={video.snippet.thumbnails.default.url}
                getIdVideo={sendToShow}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchList;
