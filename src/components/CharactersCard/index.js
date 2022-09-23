import React, { useEffect, useState } from 'react'
import './style.css'
import ImageCard from '../imageCard'

const CharactersCard = (props) => {
    const character = props.character
    const firstEpisodeUrl = character.episode[0]

    const [firstEpisodeNameState, setFirstEpisodeNameState] = useState()

    useEffect(() => {
      fetch(firstEpisodeUrl)
      .then((promisse) => promisse.json())
      .then((response) => { setFirstEpisodeNameState(response.name) })
    })

    const getStatusColor = (status) => {
        if(status === 'Alive') {
            return '--alive'
        }

        if(status === 'Dead') {
            return '--dead'
        }
    }

    return (
      <div key={props.index} className="card">
        <ImageCard src={character.image} />
        <div className='card__description'>
          <div>
            <h1 className="card__name">{character.name}</h1>
            <div className='card__status'>
              <div className={`card__bullet ${getStatusColor(character.status)}`}>
                &bull;
              </div>
              <span> {character.status} </span>
                -
              <span> {character.species}</span>
            </div>
          </div>
          <div className='card__info'>
            <p>Last known localization</p>
            <p>{character.location.name}</p>
          </div>
          <div className='card__info'>
            <p>First seen in:</p>
            <p>{firstEpisodeNameState}</p>
          </div>
        </div>
      </div>
    )
}

export default CharactersCard