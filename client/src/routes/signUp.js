import { TextField, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './css/SignUp.module.css'
import Container from '@mui/material/Container';

export default function SignUp() {
	const [firstName, setFirstName] = useState('')
	const [secondName, setSecondName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onFirstNameChange = (e) => setFirstName(e.target.value)
	const onSecondNameChange = (e) => setSecondName(e.target.value)
	const onPhoneNumberChange = (e) => setPhoneNumber(e.target.value)
	const onEmailChange = (e) => setEmail(e.target.value)
	const onPasswordChange = (e) => setPassword(e.target.value)

	const navigate = useNavigate();

	const signUp = (event) => {
		event.preventDefault();
		var params = {
			firstName, secondName, phoneNumber, email, password
		}
		axios.post("/user/registration", params)
			.then(res => {
				console.log(res)
				if (res.status === 200) {
					console.log('User is signed up')
					localStorage.token = res.data.token;
					localStorage.isAuthenticated = true;
					localStorage.isAdmin = res.data.role.toLowerCase() === 'admin'
					navigate("/")
				} else {
					console.log('Unable to sing up user')
				}
			})
			.catch(err => {
				console.log("Sign up data submit error: ", err);
			});
	}

	return (
		<Container sx={{ width: "60%" }} className={classes.main}>
			<Typography variant="h6" style={{textAlign: "center", marginTop: "15px"}}>
				Регистрация
			</Typography>
			<main style={{ padding: "1rem 0" }}>
				<form onSubmit={signUp}>
					<Stack spacing={2}>
						<TextField className= {classes.firstName} id="firstName" value={firstName} onChange={onFirstNameChange} label="Имя" variant="filled" required />
						<TextField className= {classes.secondName} id="secondName" value={secondName} onChange={onSecondNameChange} label="Фамилия" variant="filled" />
						<TextField className= {classes.phoneNumber} id="phoneNumber" value={phoneNumber} onChange={onPhoneNumberChange} label="Номер телефона" variant="filled" required/>
						<TextField className= {classes.email} id="email" value={email} onChange={onEmailChange} label="Электронная почта" variant="filled" required/>
						<TextField className= {classes.password} id="password" value={password} onChange={onPasswordChange} label="Пароль" variant="filled" type="password" required/>
						<Button
							className={classes.signUp}
							variant="outlined"
							type="submit"
							label="submit"
						>Зарегистрироваться</Button>
					</Stack>
				</form>
			</main >
		</Container>
	);
}