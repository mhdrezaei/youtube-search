import React from "react";

function SearchItem({ id, title, description, image, getIdVideo }) {
  const playVideo = (event) => {
    //   event.stopPropagation();
    event.preventDefault();
    if (event.target === event.currentTarget) {
      console.log("parent clicked");
      // 👇 your logic here

      console.log(event.target);
      console.log(event.target.id);
      getIdVideo(event.target.id);
    }
  };
  return (
    <a
    onClickCapture={playVideo}
        id={id}
      href="#"
      className="search-resoult-link list-group-item list-group-item-action flex-column align-items-start"
    >
      <div
        
        className="d-flex justify-content-start w-100"
      >
        <img src={image} className="img-thumbnail" />
        <h6 className="mb-2 align-self-center mx-2">{title}</h6>
      </div>
      <p className="mb-1">{description}</p>
    </a>
  );
}

export default SearchItem;
