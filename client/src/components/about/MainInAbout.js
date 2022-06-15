import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import classes from './css/MainInAbout.module.css'

function Main(props) {
  const { post, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Container className={classes.main}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />

        <Typography variant="h5" gutterBottom style={{ marginTop: "25px" }}>
          Компания по продаже надежных б/у автомобилей
        </Typography>
        <Typography variant="p" style={{ marginTop: "25px", fontSize: "18px", lineHeight: "1.5" }}>
          Наша компания занимается поиском и продажей б/у автомобилей. Каждый автомобиль тщательно проверяется перед
          выкупом и дальнейшей его реализацией. Наш ассортимент состоит из актуальных и пользующихся высоким спросом
          автомобилей на основе анализированного спроса.
        </Typography>
        <br /><br />
        <Typography variant="p" style={{ marginTop: "25px", fontSize: "18px", lineHeight: "1.5" }}>
          Также компаний предоставляет услуги  по персональному подбору б/у автомобиля. Для более качетсвенного подбора
          наши специалисты  разделены по категориям и каждый отвечает за определенный бренд. Поскольку у каждой марки
          есть свои особенности, знать все особенности при подборе не является возможным.
        </Typography>
        <br /><br />
        <Typography variant="p" style={{ marginTop: "25px", fontSize: "18px", lineHeight: "1.5" }}>
          Помимо данных услуг вы можете поставить свой автомобиль на продажу с нашей площадки. Но для этого необходимо
          пройти технический осмотр согласно параметрам технической проверки компании и, в случае , успешной проверки 
          вы сможете сдать автомобиль на комиссию или же воспользоваться услугой "Трейд-ин", которая предоставляет скидку 
          на покупку автомобиля компании.
        </Typography>
      </Container>
    </Grid>
  );
}

Main.propTypes = {
  post: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;