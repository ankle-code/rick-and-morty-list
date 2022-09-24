import React from 'react'
import './style.css'
import CharactersCard from "../CharactersCard"
import { Character } from '../../types'

type ListingCharactersProps = {
  characters?: Character[]
}

const ListingCharacters = (props: ListingCharactersProps) => {
    const characters = props.characters

    return (
        <div className="listing">
          {
            characters?.map((character, index) => {
              return <CharactersCard character={character} index={index} key={index}/>
            })
          }
        </div>
    )
}

export default ListingCharacters