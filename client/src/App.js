import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import PostCard from './components/PostCard';
import PostsList from './components/PostsList';

const theme = createTheme()

const sections = [
  { title: 'О компании', url: '#' },
  { title: 'Политика работы', url: '#' },
  { title: 'Контакты', url: '#' },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title = "carCar" sections = {sections}/>
      
        <main>
          <PostsList />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            
          </Grid>
        </main>
      </Container>

    </ThemeProvider>
  );
}

export default App;
