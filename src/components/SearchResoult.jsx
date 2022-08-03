import React, { useState } from 'react'
import SearchList from './SearchList'
import ShowVideo from './ShowVideo'

function SearchResoult({items}) {
const [videoId , setVideoId] = useState();
    const idForPlay = (id) => {
        console.log(id);
        const selected = items.find(video => video.id.videoId === id );
        console.log(selected)
        setVideoId(selected);

}
    console.log(items)
  return (
    <div className='container'>
        <div className='row'>
            <SearchList videos={items} getId={idForPlay}/>
            {videoId ? <ShowVideo toPlay={videoId}/> : ''}
        </div>
    </div>
  )
}

export default SearchResoult