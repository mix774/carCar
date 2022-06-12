import { TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
		<main style={{ padding: "1rem 0" }}>
			<form onSubmit={signUp}>
				<Stack spacing={2}>
					<TextField id="firstName" value={firstName} onChange={onFirstNameChange} label="Имя" variant="standard" required autoFocus />
					<TextField id="secondName" value={secondName} onChange={onSecondNameChange} label="Фамилия" variant="standard" />
					<TextField id="phoneNumber" value={phoneNumber} onChange={onPhoneNumberChange} label="Номер телефона" variant="standard" />
					<TextField id="email" value={email} onChange={onEmailChange} label="Электронная почта" variant="standard" />
					<TextField id="password" value={password} onChange={onPasswordChange} label="Пароль" variant="standard" />
					<Button
						variant="outlined"
						type="submit"
						label="submit"
					>Sign up</Button>
				</Stack>
			</form>
		</main >
	);
}