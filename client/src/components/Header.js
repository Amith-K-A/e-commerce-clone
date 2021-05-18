import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/stateProvide";
import AuthService from "../services/auth-services";

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();
  const user = AuthService.getCurrentUser();

  const handleUser = () => {
    if (user) {
      AuthService.logout();
      window.location.reload();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img alt="" className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleUser}>
            <span className="header__optionLineOne">Hello, Guest</span>
            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
