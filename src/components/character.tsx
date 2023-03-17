import { DisneyCharacter } from "../disney_character";
import React, { useContext } from "react";
import { FavouritesContext, UpdateFavouritesContext } from "../App";

interface CharacterProps {
  character: DisneyCharacter;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const characterFavourites = useContext(FavouritesContext);
  const updateCharacterFavourites = useContext(UpdateFavouritesContext);

  const toggleFavouriteForCharacter = (character: DisneyCharacter): void => {
    if (!characterFavourites.includes(character)) {
      updateCharacterFavourites([...characterFavourites, character]);
    } else {
      const updatedFavourites = characterFavourites.filter(
        ({ _id }) => _id !== character._id
      );
      updateCharacterFavourites(updatedFavourites);
    }
  };
  return (
    <article className="card">
      <h2>{character.name}</h2>

      <button
        className="card__button "
        onClick={() => toggleFavouriteForCharacter(character)}
      >
        {!characterFavourites.includes(character)
          ? "Add to Favourites"
          : "Favourited"}
      </button>

      <img
        className="card__img"
        src={character.imageUrl}
        alt={character.name}
      />
    </article>
  );
};

export default Character;
