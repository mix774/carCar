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

const root = ReactDOM.createRoot(document.getElementById('root'));
const sections = [
  { title: 'О компании', url: '#' },
  { title: 'Политика работы', url: '#' },
  { title: 'Контакты', url: '/contacts' },
];

root.render(
  <BrowserRouter>
    <Container maxWidth="lg">
    <Header title="carCar" sections={sections} />
      <main>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="contacts" element={<Contacts />} />
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
