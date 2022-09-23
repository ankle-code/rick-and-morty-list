import './style.css'

import CharactersCard from "../CharactersCard"

const ListingCharacters = (props) => {
    const characters = props.chracters

    return (
        <div className="listing">
          {
            characters?.map((character, index) => {
              return <CharactersCard character={character} index={index}/>
            })
          }
        </div>
    )
}

export default ListingCharacters