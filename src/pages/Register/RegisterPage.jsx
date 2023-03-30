
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { StyledRegister } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";


export const RegisterPage = () => {
    const navigate = useNavigate()
    const formSchemaRegister = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        telephone: yup.number().required("CPF obrigatório"),
        password: yup.string().required("Senha obrigatória").min(8,"A senha precisa ter no mínimo 8  dígitos").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'A senha precisa ter no mínimo 8 caracteres, ' +
                'uma letra maiúscula e uma letra minúscula, ' +
                'um número e um caracter especial'
        ),
        passwordConfirmation: yup.string().required("Senha obrigatória").oneOf([yup.ref('password')], "As senhas devem ser iguais"),
    })
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchemaRegister)
    })
    async function onSubmitFunctionRegister(obj){
        let data = {
            name: obj.name,
            email: obj.email,
            password: obj.password,
            telephone: obj.telephone + "",
        }
        
        try {
            console.log(data)
            const response =  await api.post('/users/', data);
            toast.success('Cadastro realizado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                navigate('/login')
                
        } catch (error) {
            console.error(error);
            toast.error('Ops! Esse e-mail já está sendo utilizado', {
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
            <Header/>
            <StyledRegister>
            <h2>Cadastre-se no Contact Space!</h2>
                <p>Insira os seus dados abaixo.</p>
                <form onSubmit={handleSubmit(onSubmitFunctionRegister)}>
                    <label htmlFor="name">Nome Completo:</label>
                    <input type="name" id="name" name="name"  {...register("name")} />
                    <h6 className="erro">{errors?.name?.message}</h6>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha"  {...register("password")} />
                    <h6 className="erro">{errors?.password?.message}</h6>
                    <label htmlFor="senha">Confirme sua senha:</label>
                    <input type="password" id="senha" name="senha"  {...register("passwordConfirmation")} />
                    <h6 className="erro">{errors?.passwordConfirmation?.message}</h6>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email"   {...register("email")} />
                    <h6 className="erro">{errors?.email?.message}</h6>
                    <label htmlFor="telephone">Celular:</label>
                    <input type="telephone" id="telephone" name="telephone"   {...register("telephone")} />
                    <h6 className="erro">{errors?.telephone?.message}</h6>
                    <button type="submit">Entrar</button>
                </form>
            </StyledRegister>
            

        </>
    )
}