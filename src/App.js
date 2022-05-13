import { useState } from 'react';

import './App.css';

import data from './data/movies.json'

function App() {

  const [isVisibleList, setIsVisibleList] = useState(false);

  const [currentVideo, setCurrentVideo] = useState(null)

  return (
    <div className="container">
      {currentVideo ? <></> :
        <ul className='list'>
          {data.map((val) => {
            return <li className='list-item' key={val.id} onClick={(e) => {
              setIsVisibleList(true);
              setCurrentVideo(val);
            }}>
              <div className='image'>
                <img alt="title" src={val.imageUrl} />
              </div>
              <div className='title'>
                <h1>{val.name}</h1>
                <span>{val.date}</span>
              </div>
            </li>
          })}
        </ul>
      }

      {isVisibleList ? <div>
        <div className='detail'>
          <div className='title' onClick={() => {
            setIsVisibleList(false);
            setCurrentVideo(null);
          }}>
            <button>{'< Back'}</button>
            <h1>{currentVideo.name} (2022)</h1>
            <span>The movie tagline goes here</span>
          </div>
          <div className='content'>
            <div className='left'>
              <div className='movie-image'>
                <img alt={currentVideo.name} src={currentVideo.imageUrl} />
              </div>
              <div className='cast'>
                <span>Full Cast (37)</span>
                <ul>
                  {data.map((val) => {
                    return <li key={val.id}>
                      <div className='image'>
                        <img alt={val.name} src={val.imageUrl} />
                      </div>
                      <div className='name'>
                        <h3>Famous Person</h3>
                        <span>Person açıklama</span>
                      </div>
                    </li>
                  })}
                </ul>
                <button>Show All</button>
              </div>
            </div>
            <div className='right'>
              <div>
                <span>Relaese Date</span>
                <h3>15 Dec, 2021</h3>
              </div>
              <div>
                <span>Genre</span>
                <h3>Action, Comedy</h3>
              </div>
              <div>
                <span>Runtime</span>
                <h3>2h 15m</h3>
              </div>
              <div>
                <span>Description</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
              <div className='reviews'>
                <div className='review'>
                  <h3>Jane Sue, 15 Dec, 2021</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nisi ante, pulvinar viverra mi tempus commodo. Phasellus pretium iaculis odio a malesuada. Donec id ultricies ex. Nullam at mi nunc. Mauris ullamcorper quam nec sollicitudin imperdiet. Donec magna mauris, hendrerit in volutpat id, scelerisque vel nisi. Donec vitae purus blandit, porta arcu at, gravida odio. Nullam consequat convallis purus, a rutrum est lobortis sit amet. Integer id ornare neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
                <div className='review'>
                  <h3>Mary Sue, 20 Dec, 2021</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nisi ante, pulvinar viverra mi tempus commodo. Phasellus pretium iaculis odio a malesuada. Donec id ultricies ex. Nullam at mi nunc. Mauris ullamcorper quam nec sollicitudin imperdiet. Donec magna mauris, hendrerit in volutpat id, scelerisque vel nisi. Donec vitae purus blandit, porta arcu at, gravida odio. Nullam consequat convallis purus, a rutrum est lobortis sit amet. Integer id ornare neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
                <div className='review'>
                  <h3>John Sue, 25 Dec, 2021</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nisi ante, pulvinar viverra mi tempus commodo. Phasellus pretium iaculis odio a malesuada. Donec id ultricies ex. Nullam at mi nunc. Mauris ullamcorper quam nec sollicitudin imperdiet. Donec magna mauris, hendrerit in volutpat id, scelerisque vel nisi. Donec vitae purus blandit, porta arcu at, gravida odio. Nullam consequat convallis purus, a rutrum est lobortis sit amet. Integer id ornare neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div> : <></>}

    </div >
  );
}

export default App;
