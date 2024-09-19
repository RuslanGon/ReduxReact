import { NavLink } from "react-router-dom";
import css from '../../page/MainPage.module.css';
import clsx from "clsx";
import logo from '../../assets/images/logo.svg';
import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../../redux/auth/selectors.js";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const Layout = ({ children }) => {

    const isSignedIn = useSelector(selectAuthIsSignedIn)

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
          </NavLink></> : 
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
