// import React from 'react';
// import { Container,Row } from 'react-bootstrap';

// const NavBar = () => {
//     return (
//         <div className="navbar">
//             <Container>
//                 <Row>
//                     <nav class="home__nav">
//                         <div class="home__icon__img">
//                             <a href="./index.html"><img class="home__icon" src="./img/logo-white.png" alt=""/></a>
//                         </div>
//                         <ul class="home__nav__ul">
//                             <li class="home__nav__li"><a class="home__nav__a" href="./index.html"><i class="fa-solid fa-house svg"></i>Home</a><a class="home__nav__a-hidden" href="#"><i class="fa-solid fa-house svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="../hesham explore/index.html"><i class="fa-solid fa-magnifying-glass svg"></i>Explore</a><a class="home__nav__a-hidden" href="../hesham explore/index.html"><i class="fa-solid fa-magnifying-glass svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-regular fa-bell svg"></i>Notifications</a><a class="home__nav__a-hidden" href="#"><i class="fa-regular fa-bell svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-regular fa-envelope svg"></i>Messages</a><a class="home__nav__a-hidden" href="#"><i class="fa-regular fa-envelope svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="../hesham lists/index.html"><i class="fa-solid fa-list-ul svg"></i>Lists</a><a class="home__nav__a-hidden" href="../hesham lists/index.html"><i class="fa-solid fa-list-ul svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-solid fa-user-group svg"></i>Communities</a><a class="home__nav__a-hidden" href="#"></i><i class="fa-solid fa-user-group svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-brands fa-x-twitter svg"></i>Vertified</a><a class="home__nav__a-hidden" href="#"><i class="fa-brands fa-x-twitter svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-regular fa-user svg"></i>Profile</a><a class="home__nav__a-hidden" href="#"><i class="fa-regular fa-user svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-solid fa-ellipsis svg"></i>More</a><a class="home__nav__a-hidden" href="#"><i class="fa-solid fa-ellipsis svg"></i></a></li>
//                         </ul>
//                         <button class="home__nav__btn">Post</button><button class="home__nav__btn-hidden"><i class="fa-brands fa-twitter tweet"></i></i></button>
//                         <div class="home__nav__profile">
//                             <div class="home__nav__profile__img">
//                                 <img src={h} alt=""/>
//                             </div>
//                             <div class="home__nav__profile__name">
//                                 <div>Ahmed Hesham</div>
//                                 <span>@ahmed10_hesh...</span>
//                             </div>
//                             <div class="home__nav__profile__svg">
//                                 <i class="fa-solid fa-ellipsis svg"></i>
//                             </div>
//                         </div>
//                         <div class="home__nav__profile-hidden">
//                             <img src={h} alt=""/>
//                         </div>
//                     </nav>
//                 </Row>
//             </Container>
//         </div>
            
        
//     );
// }

// export default NavBar;






// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import logo from '../../../assets/logo-white.png'
// import h from '../../../assets/h.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'


// const Navbar = () => {
//     return (
//         <div className="navbar home">
//             <Container>
//                 <Row>
//                     <nav className="home__nav">
//                         <div className="home__icon__img">
//                             <a href="./index.html"><img className="home__icon" src={logo} alt="" /></a>
//                         </div>
//                         <ul className="home__nav__ul">
//                             <li className="home__nav__li">
//                                 <a className="home__nav__a" href="./index.html">
//                                 <FontAwesomeIcon className='svg' icon={faHouse} />Home
//                                 </a>
//                                 <a className="home__nav__a-hidden" href="#">
//                                 <FontAwesomeIcon className='svg' icon={faHouse} />
//                                 </a>
//                             </li>
//                             {/* Add more list items similarly */}
//                         </ul>
//                         <button className="home__nav__btn">Post</button>
//                         <button className="home__nav__btn-hidden">
//                             <i className="fa-brands fa-twitter tweet"></i>
//                         </button>
//                         <div className="home__nav__profile">
//                             <div className="home__nav__profile__img">
//                                 <img src={h} alt="" />
//                             </div>
//                             <div className="home__nav__profile__name">
//                                 <div>Ahmed Hesham</div>
//                                 <span>@ahmed10_hesh...</span>
//                             </div>
//                             <div className="home__nav__profile__svg">
//                                 <i className="fa-solid fa-ellipsis svg"></i>
//                             </div>
//                         </div>
//                         <div className="home__nav__profile-hidden">
//                             <img src={h} alt="" />
//                         </div>
//                     </nav>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default Navbar;






// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import logo from '../../../assets/logo-white.png';
// import h from '../../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHouse,
//   faMagnifyingGlass,
//   faBell,
//   faEnvelope,
//   faListUl,
//   faUserGroup,
//   faFeatherPointed,
  
// //   faTwitter,
//   faUser,
//   faEllipsis,
// } from '@fortawesome/free-solid-svg-icons';
//  // Import more icons as needed
//  import { faXTwitter } from "@fortawesome/free-brands-svg-icons"

// const Navbar = () => {
//   return (
//     <div className="navbar home">
//         <nav className="home__nav">
//             <div className="home__icon__img">
//               <a href="./index.html">
//                 <img className="home__icon" src={logo} alt="" />
//               </a>
//             </div>
//             <ul className="home__nav__ul">
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="./index.html">
//                   <FontAwesomeIcon className="svg" icon={faHouse} />
//                   Home
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faHouse} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="../hesham explore/index.html">
//                   <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
//                   Explore
//                 </a>
//                 <a className="home__nav__a-hidden" href="../hesham explore/index.html">
//                   <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faBell} />
//                   Notifications
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faBell} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faEnvelope} />
//                   Messages
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faEnvelope} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="../hesham lists/index.html">
//                   <FontAwesomeIcon className="svg" icon={faListUl} />
//                   Lists
//                 </a>
//                 <a className="home__nav__a-hidden" href="../hesham lists/index.html">
//                   <FontAwesomeIcon className="svg" icon={faListUl} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faUserGroup} />
//                   Communities
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faUserGroup} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                 <FontAwesomeIcon className='svg' icon={faXTwitter} />
//                   Verified
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                 <FontAwesomeIcon className='svg' icon={faXTwitter} />


//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faUser} />
//                   Profile
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faUser} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faEllipsis} />
//                   More
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faEllipsis} />
//                 </a>
//               </li>
//               {/* Add more list items similarly */}
//             </ul>
//             <button className="home__nav__btn">Post</button>
//             <button className="home__nav__btn-hidden">
//               <i className="fa-brands fa-twitter tweet"></i>
//               <FontAwesomeIcon className='tweet' icon={faFeatherPointed} />
//             </button>
//             <div className="home__nav__profile">
//               <div className="home__nav__profile__img">
//                 <img src={h} alt="" />
//               </div>
//               <div className="home__nav__profile__name">
//                 <div>Ahmed Hesham</div>
//                 <span>@ahmed10_hesh...</span>
//               </div>
//               <div className="home__nav__profile__svg">
//                 <i className="fa-solid fa-ellipsis svg"></i>
//               </div>
//             </div>
//             <div className="home__nav__profile-hidden">
//               <img src={h} alt="" />
//             </div>
//           </nav>
          
        
//     </div>
//   );
// };

// export default Navbar;








import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
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
          <NavLink to="/">
            <img className="home__icon" src={logo} alt="" />
          </NavLink>
        </div>
        <ul className="home__nav__ul">
          <li className="home__nav__li">
            <NavLink to="/" className="home__nav__a">
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
            <NavLink to="/notifications" className="home__nav__a">
              <FontAwesomeIcon className="svg" icon={faBell} />
              Notifications
            </NavLink>
            <NavLink to="/notifications" className="home__nav__a-hidden">
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
