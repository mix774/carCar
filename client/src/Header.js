import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Link
          style={{ textDecoration: 'none' }}
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          key={title.title}
          href={title.url}
          sx={{ flex: 1 }}
        >
          {title.title}
        </Link>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {!localStorage.isAuthenticated && <div>
          <Button variant="outlined" size="small" href="/signup">
            Sign up
          </Button>
          <Button variant="outlined" size="small" href="/login">
            Login
          </Button>
        </div>}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => ((section.admin && localStorage.isAuthenticated && localStorage.isAdmin) || !section.admin) && (
          <Link
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