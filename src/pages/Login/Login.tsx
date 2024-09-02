import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.css';
import { FormEvent, useState } from "react";
import { PREFIX } from "../../helpers/API";
import axios, { AxiosError } from "axios";
import { LoginResponse } from "../../Interfaces/auth.interface";

export type LoginForm = {
    email: {
        value:string;
    };
    password: {
        value: string;
    };
}

export function Login() {
    const [error, setError] = useState<string | undefined>();
    const navigate = useNavigate();
    
    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setError(undefined);
        const target = e.target as typeof e.target & LoginForm;
        const {email, password} = target;
        await sendLogin(email.value, password.value);
    };

    const sendLogin = async (email: string, password: string) => {
        try {
            const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
                email,
                password
            }) ;
            localStorage.setItem('jwt', data.access_token);
            navigate('/');
        } catch(e) {
            if (e instanceof AxiosError) 
            setError(e.response?.data.message)
        }
         
    }


    return <div className={styles['login']}>
    <Heading>Вход</Heading>
    {error && <div className={styles['error']}>{error}</div>}
    <form className={styles['form']} onSubmit={submit}>
        <div className={styles['field']}>
            <label htmlFor="email">Ваш email</label>
            <Input id="email" name='email' placeholder="email"/>
        </div>        
        <div className={styles['field']}>
            <label htmlFor="password">Ваш пароль</label>
            <Input id="password" name='password' type="password" placeholder="Пароль"/>
        </div>
        <Button appearence="big">Вход</Button>
    </form>
    
    <div className={styles['links']}>
        <div>Нет аккаунта?</div>
        <Link to='/auth/register'>Зарегистрироваться</Link>
    </div>
    
    </div>
}