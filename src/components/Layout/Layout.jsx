import { NavLink } from "react-router-dom";
import css from '../../page/MainPage.module.css';
import clsx from "clsx";
import logo from '../../assets/images/logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsSignedIn, selectUserData } from "../../redux/auth/selectors.js";
import { apiLogout } from "../../redux/auth/operations.js";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const Layout = ({ children }) => {
  const dispatch = useDispatch()

const userData = useSelector(selectUserData)  
const isSignedIn = useSelector(selectAuthIsSignedIn)

const logOut = () => {
  dispatch(apiLogout())
}
  return (
    <div>
      <header className={css.header}>
        <NavLink className={css.mainlogo} to="/">
          <img className={css.logo} src={logo} alt="logo" />
        </NavLink>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          {isSignedIn ? <> 
          <NavLink className={getNavLinkClassName} to="/contacts">
            Contacts
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/favorite">
            Favorite
          </NavLink>
          <span>Hello {userData.name} 🖐 </span>
          <button onClick={logOut} type="button">Logout</button>
          </> : 
          <>  
          <NavLink className={getNavLinkClassName} to="/register">
            Register
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/login">
            Login
          </NavLink> </>}
        
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
