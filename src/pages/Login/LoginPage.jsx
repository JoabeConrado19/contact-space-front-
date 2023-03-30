
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { StyledLogin } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";


export const LoginPage = () => {
    const navigate = useNavigate()

    const formSchemaRegister = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),

    })
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchemaRegister)
    })
    async function onSubmitFunctionRegister(obj){
        const data = {
            email: obj.email,
            password: obj.password,
        }
        try {
            const response =  await api.post('/login/', data);
            console.log(data)
            toast.success('Login realizado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }); 
                localStorage.setItem("Token", response.data.token); 
                localStorage.setItem("Email", obj.email); 

                navigate('/dashboard')
        } catch (error) {
            console.error(error);
            toast.error('Ops! E-mail ou senha inválidos', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        }
        

    return (
        <>
            <Header />
            <StyledLogin>
                <h2>Bem vindo de volta ao Contact Space!</h2>
                <p>Insira o seu email e senha abaixo.</p>
                <form onSubmit={handleSubmit(onSubmitFunctionRegister)}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email"  {...register("email")}/>
                    <h6 className="erro">{errors?.email?.message}</h6>

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha"   {...register("password")} />
                    <h6 className="erro">{errors?.password?.message}</h6>

                    <button type="submit">Entrar</button>
                </form>
            </StyledLogin>


        </>
    )
}