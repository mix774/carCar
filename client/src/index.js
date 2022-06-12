import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './routes/contacts';
import Header from './Header';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PostsList from './components/PostsList';
import Admin from './routes/admin';
import Login from './routes/login';
import SignUp from './routes/signUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
const title = {
  title: 'carCar', url: '/'
}
const sections = [
  { title: 'Главная', url: '/' },
  { title: 'О компании', url: '#' },
  { title: 'Политика работы', url: '#' },
  { title: 'Контакты', url: '/contacts' },
  {title: 'Админ-панель', url: '/admin', admin: true}
];

root.render(
  <BrowserRouter>
    <Container maxWidth="lg">
    <Header title={title} sections={sections} />
      <main>
        <Grid container spacing={0} sx={{ mt: 3 }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="admin" element={<Admin />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </Grid>
      </main>
    </Container>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
