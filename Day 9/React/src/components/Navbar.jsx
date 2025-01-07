import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="index">
          <div className="logo">
            <img src="https://www.jiocinema.com/images/jc_logo_v2.svg" alt="" />
          </div>
          <button type="button">
            <img
              src="https://www.jiocinema.com/images/subscription/crown.svg"
              alt=""
            />
            Go Premium
          </button>
          <div className="list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/explore">Sports</Link>
              </li>
              <li>
                <Link to="/About">Movies</Link>
              </li>
              <li>
                <Link to="/contact">Tv Shows</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="search">
            <img
              src="https://www.jiocinema.com/images/search/ic_search.svg"
              alt=""
            />
            <input type="text" placeholder="Movies,Shows & More" />
            <img
              className="mic"
              src="https://www.jiocinema.com/images/search/voice-search.svg"
              alt=""
            />
          </div>
          <div className="profile">
            <img
              width={"40px"}
              src="https://www.jiocinema.com/images/profile/avatar_guest.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: 'gray', height: '1px', border: 'none' }} />
      <div className="content">
        <ul>
          <li>For you</li>
          <li>Cricket</li>
          <li>Big Boss</li>
          <li>New Movies</li>
          <li>BBK</li>
          <li>MTV Radies XX</li>
          <li>Kids & Family</li>
          <li>Free Anime</li>
          <li>ISL</li>
          <li>Reality</li>
          <li>Tata IPL</li>
          <li>Premium</li>
          <li>Top 10</li>
          <li>Ind vs Aus</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
