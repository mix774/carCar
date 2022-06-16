import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './routes/contacts';
import Header from './Header';
import './index.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Admin from './routes/admin';
import Login from './routes/login';
import SignUp from './routes/signUp';
import About from './routes/about';
import Footer from './Footer'
import Post from './routes/post'
import AddPost from './routes/addPost'
import Favorites from './routes/favorites'
import Main from './Main';

function App() {

  return (
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg">
          <main>
            <Grid container spacing={0} sx={{ mt: 3 }}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="about" element={<About />} />
                <Route path="admin" element={<Admin />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="post/:id" element={<Post />} />
                <Route path="addpost" element={<AddPost />} />
                <Route path="favorites" element={<Favorites />} />
              </Routes>
            </Grid>
          </main>
        </Container>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
