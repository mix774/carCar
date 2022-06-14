import * as React from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import classes from './css/Header.module.css'
import CarCrashIcon from '@mui/icons-material/CarCrash';

function Header(props) {
  const { sections, title } = props;
  const nav = useNavigate()

  const logOut = () => {
    localStorage.clear()
    nav('/')
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.highToolbar} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div className={classes.logo}>
          <CarCrashIcon fontSize="large"/>
        </div>
        <Link
          className={classes.companyName}
          style={{ textDecoration: 'none' }}
          variant="h5"
          color="inherit"
          noWrap
          key={title.title}
          href={title.url}
          sx={{ flex: 1 }}
        >
          {title.title}
        </Link>

        {!localStorage.isAuthenticated && <div className={classes.auth}>
          <Button className={classes.btnSignUp} variant="outlined" size="small" href="/signup">
            Sign up
          </Button>
          <Button variant="outlined" size="small" href="/login">
            Login
          </Button>
        </div>}
        {localStorage.isAuthenticated && <div className={classes.auth}>
          <Button variant="outlined" size="small" onClick={logOut}>
            Log out
          </Button>
        </div>}
      </Toolbar>
      <Toolbar
        
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        className={classes.sections}
      >
        {sections.map((section) => ((section.admin && localStorage.isAuthenticated && localStorage.isAdmin) || !section.admin) && (
          <Link
            className={classes.links}
            textDecoration="none"
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {/* <RouterLink to="/contacts">{section.title}</RouterLink> */}
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.object.isRequired,
};

export default Header;