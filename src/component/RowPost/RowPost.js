import React from 'react'
import { useEffect,useState } from 'react'
import Youtube from 'react-youtube'
import "./RowPost.css"
import {imageBaseUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {

  const[movies,setMovies]=useState([]);
  const[newid,setNewid]=useState("")


  useEffect(()=>{
    axios.get(props.url)
    .then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results)
    })

  },[])
  const opts ={
    height:"390",
    width:'100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie =(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setNewid(response.data.results[0])
      }else{
        console.log("Trailer not avaliable");
      }
    })
  }


  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="row-posters">
          {movies.map((obj,key)=>{
            return <img onClick={()=>{handleMovie(obj.id)}}  key={key} className={props.isSmall?'smallPoster':'poster'} src={`${imageBaseUrl+obj.backdrop_path}`} alt="" />
          })}
            
        </div>
         {newid && 
         <div className='video-div'> 
                <div className=' button-div' ><button className='close-button' onClick={()=>{setNewid(null)}}>Close</button></div>
                <Youtube opts={opts}  videoId={newid.key}/>
          </div>}

    </div>
  )
}

export default RowPost