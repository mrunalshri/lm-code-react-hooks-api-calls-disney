import { DisneyCharacter } from "../disney_character";
import React, { useContext } from "react";
import { FavouritesContext, UpdateFavouritesContext } from "../App";

interface CharacterProps {
  character: DisneyCharacter;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const characterFavourites = useContext(FavouritesContext);
  const updateCharacterFavourites = useContext(UpdateFavouritesContext);

  const toggleFavouriteForCharacter = (characterId: number): void => {
    if (!characterFavourites.includes(characterId)) {
      updateCharacterFavourites([...characterFavourites, characterId]);
    } else {
      const updatedFavourites = characterFavourites.filter(
        (id) => id !== characterId
      );
      updateCharacterFavourites(updatedFavourites);
    }
  };
  return (
    <article className="card">
      <h2>{character.name}</h2>

      <button
        className="card__button "
        onClick={() => toggleFavouriteForCharacter(character._id)}
      >
        {!characterFavourites.includes(character._id)
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
