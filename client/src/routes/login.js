import { TextField, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from './css/Login.module.css'
import Container from '@mui/material/Container';

export default function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onEmailChange = (e) => setEmail(e.target.value)
	const onPasswordChange = (e) => setPassword(e.target.value)
	const navigate = useNavigate();

	const login = (event) => {
		event.preventDefault();
		var params = {
			email, password
		}
		axios.post("/user/login", params).then(res => {
			console.log(res)
			if (res.status === 200) {
				console.log('User is logged in')
				console.log(res)
				localStorage.token = res.data.token;
				localStorage.isAuthenticated = true;
				localStorage.isAdmin = res.data.role.toLowerCase() === 'admin'
				if (localStorage.isAdmin === 'true') {
					navigate('/admin')
				} else {
					navigate('/')
				}
			} else {
				localStorage.isAuthenticated = false;
				console.log('Unable to login')
			}
		})
			.catch(err => {
				console.log("Login data submit error: ", err);
			});
	}

	return (
				<Container sx={{ width: "60%" }} className={classes.main}>
					<Typography variant="h6" style={{ textAlign: "center", marginTop: "15px" }}>
						Вход
					</Typography>
					<main style={{ padding: "1rem 0" }}>
						<form onSubmit={login}>
							<Stack spacing={2}>
								<TextField className={classes.email} id="email" value={email} onChange={onEmailChange} label="Электронная почта" variant="filled" required />
								<TextField className={classes.password} id="password" value={password} onChange={onPasswordChange} label="Пароль" variant="filled" type="password" required />
								<Button
									className={classes.login}
									variant="outlined"
									type="submit"
									label="submit"
								>Войти</Button>
							</Stack>
						</form>
					</main>
				</Container>
	);
}