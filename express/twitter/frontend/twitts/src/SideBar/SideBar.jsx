import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUser
} from "react-icons/fa";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="logo">
        <FaTwitter />
      </div>

      {/* Menu */}
      <div className="menu">
        <div className="item active">
          <FaHome />
          <span>Home</span>
        </div>

        <div className="item">
          <FaHashtag />
          <span>Explore</span>
        </div>

        <div className="item">
          <FaBell />
          <span>Notifications</span>
        </div>

        <div className="item">
          <FaEnvelope />
          <span>Messages</span>
        </div>

        <div className="item">
          <FaBookmark />
          <span>Bookmarks</span>
        </div>

        <div className="item">
          <FaUser />
          <span>Profile</span>
        </div>
      </div>

      {/* Tweet Button */}
      <button className="tweet-btn">Tweet</button>
    </div>
  );
};

export default SideBar;
