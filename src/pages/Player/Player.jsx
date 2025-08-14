import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate,useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjRhYjNhMGYxZTFjZjIxN2EyZDc2OWYxMGRhN2ExYyIsIm5iZiI6MTc1MzI3OTA0Mi4zNjgsInN1YiI6IjY4ODBlYTQyMzE3YTVjZmU5Y2Y3NzZhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZXhAo7pZ3jAw5lsVSyH7TQvnZj0pltvNgIGOcuWRH7k'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" className='back-arrow' onClick={()=>{navigate(-2)}}  />
        <iframe
      width='90%'
      height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer'
      frameBorder='0'
      allowFullScreen
    ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
