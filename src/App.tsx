import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import CharacterContainer from "./components/character_container";
import Navigation from "./components/navigation";
import { DisneyCharacter } from "./disney_character";

export const FavouritesContext = React.createContext<DisneyCharacter[]>([]);
export const UpdateFavouritesContext = React.createContext<
  React.Dispatch<React.SetStateAction<DisneyCharacter[]>>
>(() => null);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);
  const [characterFavourites, setCharacterFavourites] = useState<
    Array<DisneyCharacter>
  >([]);
  const [favouriteClicked, setFavouriteClicked] = useState<Boolean>(false);

  useEffect(() => {
    if (!favouriteClicked) {
      setCurrentPage(1);
    }
  }, [favouriteClicked]);

  useEffect(() => {
    const getCharacters = async (pageNumber: number) => {
      const apiResponse = await fetch(
        `http://api.disneyapi.dev/characters?page=${pageNumber}`
      );
      const json = (await apiResponse.json()) as { data: DisneyCharacter[] };
      setCharacters(json.data);
    };
    getCharacters(currentPage);
  }, [currentPage]);

  return (
    <FavouritesContext.Provider value={characterFavourites}>
      <UpdateFavouritesContext.Provider value={setCharacterFavourites}>
        <div className="page">
          <Header
            currentPage={currentPage}
            favouriteClicked={favouriteClicked}
          />
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setFavouriteClicked={setFavouriteClicked}
            favouriteClicked={favouriteClicked}
          />
          <CharacterContainer
            characters={favouriteClicked ? characterFavourites : characters}
          />
        </div>
      </UpdateFavouritesContext.Provider>
    </FavouritesContext.Provider>
  );
};

export default App;
