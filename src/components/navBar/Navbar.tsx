import "./index.scss";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://cdn.yenisabah.az/resize.php?w=0&h=0&file=image_750x422_64cbac0da6f9c.jpg" alt="profile" />
          <span>Asif Mustafayev</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
