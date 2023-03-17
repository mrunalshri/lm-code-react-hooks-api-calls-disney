interface HeaderProps {
  currentPage: number;
  favouriteClicked: Boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, favouriteClicked }) => (
  <header className="header__container">
    <h1 className="header__title">The World of Disney</h1>
    {!favouriteClicked && (
      <p className="header__page-count ">Page: {currentPage}</p>
    )}
  </header>
);

export default Header;
