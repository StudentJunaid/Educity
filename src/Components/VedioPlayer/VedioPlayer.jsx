import React, { useRef } from 'react'
import './VedioPlayer.css'
import vedio from '../../assets/vedio.mp4'

function VedioPlayer({vedioPlay,setPlayVedio}) {
  const player = useRef(null)

  const closePlayer = (e) =>{
    if(e.target === player.current){
      setPlayVedio(false)
    }
  }
  return (
    <div className={`vedio ${vedioPlay? "": "hide"}`} ref={player} onClick={closePlayer}>
      <video src={vedio} loop muted autoPlay></video>
    </div>
  )
}

export default VedioPlayer