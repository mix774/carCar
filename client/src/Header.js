import * as React from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import classes from './css/Header.module.css'
import CarCrashIcon from '@mui/icons-material/CarCrash';
import { Container } from '@mui/system';
import { isAdmin } from './utils'

function Header() {

  const title = { title: 'carCar', url: '/' }
  const sections = [
    { title: 'Главная', url: '/', admin: false },
    { title: 'О компании', url: '/about', admin: false },
    { title: 'Политика работы', url: '#', admin: false },
    { title: 'Контакты', url: '/contacts', admin: false },
    { title: 'Админ-панель', url: '/admin', admin: true }
  ];

  const nav = useNavigate()

  const logOut = () => {
    localStorage.clear()
    nav('/')
  }

  sections.map(section => {
    console.log(`${section.title} ${(section.admin && isAdmin()) || !section.admin}`);
  })

  return (
    <React.Fragment >
      <Toolbar className={classes.highToolbar} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div className={classes.logo}>
          <CarCrashIcon fontSize="large" />
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
        className={classes.sections}
        component="nav"
        variant="dense"
      >
        {sections.map((section) => ((section.admin && isAdmin()) || !section.admin) && (
          <Link
            style={{ textDecoration: 'none', fontSize: '18px', color: 'inherit', padding: '5px' }}
            className={classes.sectionText}
            key={section.title}
            href={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;