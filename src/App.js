import React, { useState, useEffect } from 'react'
import './style.css'
import WinDimensions from './getWidth.js'

function App() {
  const [ArrayPhotos, setArrayPhotos] = useState([])
  const { height, width } = WinDimensions()

  window.addEventListener('load', () => {
    async function buscaPhotos() {
      const page = Math.floor(Math.random() * (200 - 1) + 1)
      const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=32`
      const token = '563492ad6f917000010000010b6451c2d5cc476981aeeee4673a10f5'
      const req = await fetch(`${url}/`, {
        cache: 'default',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
          Accept: 'application/json'
        },
        method: 'GET'
      }).then(res => res.json())
      const res = await req.photos
      setArrayPhotos(res)
    }
    buscaPhotos()
  })

  return (
    <div className="galeria">
      {ArrayPhotos.map((photo, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 1 ? (width <= 425 ? 'r2' : 'r1') : 'r2'
          } ${index % 2 === 0 ? (width <= 425 ? 'c2' : 'c1') : 'c2'}`}
        >
          <img src={photo.src.large2x} alt="" />
        </div>
      ))}
    </div>
  )
}

export default App
