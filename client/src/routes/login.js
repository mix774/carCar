import { TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (e) => setEmail(e.target.value)
    const onPasswordChange = (e) => setPassword(e.target.value)

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
                window.location.reload(false);
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
        <main style={{ padding: "1rem 0" }}>
            <form onSubmit={login}>
                <Stack>
                    <TextField id="email" value={email} onChange={onEmailChange} label="Электронная почта" variant="standard" />
                    <TextField id="password" value={password} onChange={onPasswordChange} label="Пароль" variant="standard" />
                    <Button
                        variant="outlined"
                        type="submit"
                        label="submit"
                    >Log in</Button>
                </Stack>
            </form>
        </main>
    );
}