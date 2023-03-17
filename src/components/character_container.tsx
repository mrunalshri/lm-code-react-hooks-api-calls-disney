import React from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";

interface CharacterContainerProps {
  characters: Array<DisneyCharacter>;
}

const CharacterContainer: React.FC<CharacterContainerProps> = ({
  characters,
}) => {
  return (
    <div className="card-container">
      {characters.length > 0 ? (
        characters.map((character) => (
          <Character key={character._id} character={character} />
        ))
      ) : (
        <p className="header__page-count ">Nothing to show!</p>
      )}
    </div>
  );
};

export default CharacterContainer;
