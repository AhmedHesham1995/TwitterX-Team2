
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-white.png';
import h from '../../../assets/h.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faBell,
  faEnvelope,
  faListUl,
  faUserGroup,
  faFeatherPointed,
  faUser,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar home">
      <nav className="home__nav">
        <div className="home__icon__img">
          <NavLink to="/home">
            <img className="home__icon" src={logo} alt="" />
          </NavLink>
        </div>
        <ul className="home__nav__ul">
          <li className="home__nav__li">
            <NavLink to="/home" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faHouse} />
              Home
            </NavLink>
            <NavLink to="/" className="home__nav__a-hidden">
              <FontAwesomeIcon className="svg" icon={faHouse} />
            </NavLink>
          </li>
          <li className="home__nav__li">
            <NavLink to="/explore" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
              Explore
            </NavLink>
            <NavLink to="/explore" className="home__nav__a-hidden">
              <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
            </NavLink>
          </li>
          <li className="home__nav__li">
            <NavLink to="/notification" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faBell} />
              Notifications
            </NavLink>
            <NavLink to="/notification" className="home__nav__a-hidden">
              <FontAwesomeIcon className="svg" icon={faBell} />
            </NavLink>
          </li>
          <li className="home__nav__li">
            <NavLink to="/messages" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faEnvelope} />
              Messages
            </NavLink>
            <NavLink to="/messages" className="home__nav__a-hidden">
              <FontAwesomeIcon className="svg" icon={faEnvelope} />
            </NavLink>
          </li>
          <li className="home__nav__li">
            <NavLink to="/lists" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faListUl} />
              Lists
            </NavLink>
            <NavLink to="/lists" className="home__nav__a-hidden">
              <FontAwesomeIcon className="svg" icon={faListUl} />
            </NavLink>
          </li>
          <li className="home__nav__li">
            <NavLink to="/communities" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faUserGroup} />
              Communities
            </NavLink>
            <NavLink to="/communities" className="home__nav__a-hidden">
              <FontAwesomeIcon className="svg" icon={faUserGroup} />
            </NavLink>
          </li>
          <li className="home__nav__li">
            <NavLink to="/verified" className="home__nav__a">
              <FontAwesomeIcon className='svg' icon={faXTwitter} />
              Verified
            </NavLink>
            <NavLink to="/verified" className="home__nav__a-hidden">
              <FontAwesomeIcon className='svg' icon={faXTwitter} />
            </NavLink>
          </li>
          <li className="home__nav__li">
            <NavLink to="/profile" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faUser} />
              Profile
            </NavLink>
            <NavLink to="/profile" className="home__nav__a-hidden">
              <FontAwesomeIcon className="svg" icon={faUser} />
            </NavLink>
          </li>
          <li className="home__nav__li">
            <NavLink to="/more" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faEllipsis} />
              More
            </NavLink>
            <NavLink to="/more" className="home__nav__a-hidden">
              <FontAwesomeIcon className="svg" icon={faEllipsis} />
            </NavLink>
          </li>
        </ul>
        <button className="home__nav__btn">Post</button>
        <button className="home__nav__btn-hidden">
          <i className="fa-brands fa-twitter tweet"></i>
          <FontAwesomeIcon className='tweet' icon={faFeatherPointed} />
        </button>
        <div className="home__nav__profile">
          <div className="home__nav__profile__img">
            <img src={h} alt="" />
          </div>
          <div className="home__nav__profile__name">
            <div>Ahmed Hesham</div>
            <span>@ahmed10_hesh...</span>
          </div>
          <div className="home__nav__profile__svg">
            <i className="fa-solid fa-ellipsis svg"></i>
          </div>
        </div>
        <div className="home__nav__profile-hidden">
          <img src={h} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
