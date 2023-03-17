interface NavigationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  favouriteClicked: Boolean;
  setFavouriteClicked: (isFavourate: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage,
  setFavouriteClicked,
  favouriteClicked,
}) => {
  const nextPage = () => {
    const newPageNumber = currentPage + 1;
    setCurrentPage(newPageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const newPageNumber = currentPage - 1;
      setCurrentPage(newPageNumber);
    }
  };

  return (
    <div className="navigation">
      {!favouriteClicked && (
        <div className="navigation__item">
          <button className="navigation__button" onClick={prevPage}>
            Prev Page
          </button>
        </div>
      )}
      <div className="navigation__item">
        <button
          className="navigation__button"
          onClick={() => setFavouriteClicked(!favouriteClicked)}
        >
          {favouriteClicked ? "Show All" : "Show Favourites"}
        </button>
      </div>
      {!favouriteClicked && (
        <div className="navigation__item">
          <button className="navigation__button" onClick={nextPage}>
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
