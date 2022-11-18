import React, { useState, useEffect } from 'react'
import './style.css'
import WinDimensions from './getWidth.js'
import { token } from './api.js'
import { createClient } from 'pexels'

function App() {
  const [ArrayPhotos, setArrayPhotos] = useState([])
  const { width } = WinDimensions()
  const target = '_blank'

  useEffect(() => {
    const cliente = createClient(token)
    const page = Math.floor(Math.random() * 200)

    cliente.photos.curated({ page: page, per_page: 32 }).then(photos => {
      setArrayPhotos(photos.photos)
    })
    console.log('Projeto Galeria - https://jacksondev.com.br/')
  }, [])
  const handleClick = index => {
    const divPhoto = document.querySelectorAll('.galeria div')
    divPhoto[index].classList.toggle('active')
  }

  return (
    <div className="galeria">
      {ArrayPhotos.map((photo, index) => (
        <div
          onClick={() => {
            handleClick(index)
          }}
          key={index}
          className={`${
            index % 2 === 1 ? (width <= 425 ? 'r2' : 'r1') : 'r2'
          } ${index % 2 === 0 ? (width <= 425 ? 'c2' : 'c1') : 'c2'}`}
        >
          <img src={photo.src.large2x} alt={photo.alt} />
          <a href={photo.photographer_url} target={target}>
            <p className="photographer">
              Fotografo: <br></br>
              {photo.photographer}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default App
