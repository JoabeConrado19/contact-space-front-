
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { StyledDashboard } from "./style";
import { AiOutlineFileAdd } from 'react-icons/ai'
import { ImWhatsapp } from 'react-icons/im'
import { FaRegEdit } from 'react-icons/fa'
import { CgTrash } from 'react-icons/cg'
import { AiFillCloseSquare } from 'react-icons/ai'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";


export const DashboardPage = () => {
    const [user, setUser] = useState({})
    const [contacts, setContacts] = useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()
    const formSchemaRegister = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        telephone: yup.number().required("Telefone obrigatório"),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchemaRegister)
    })
    async function onSubmitFunctionRegister(obj) {
        let data = {
            name: obj.name,
            email: obj.email,
            telephone: obj.telephone + ""
        }

        try {
            console.log(data)
            const response = await api.post('/users/contacts', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`
                }
            });
            toast.success('Contato cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            const contacts = response.contacts.reverse()
            setContacts(contacts)
            window.location.reload();



        } catch (error) {
            console.error(error);
            toast.error('Ops! houve algum erro.', {
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


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
      
    };



    useEffect(() => {
        api
            .get(`/users`)
            .then((response) => {
                const users = response.data
                users.forEach(element => {
                    if (element.email == localStorage.getItem("Email")) {
                        setUser(element)
                        setContacts(element.contacts)
                    }

                });

                // setProducts([...response.data.results])
                // setReversedProducts([...response.data.results.reverse()])
                // console.log(response.data.results)
                console.log(user)

            })
    }, [])


    return (
        <>
            <Header />
            <StyledDashboard>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cadastro de contato
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Insira os dados do seu contato abaixo.
                    </Typography>

                    <form className="modal-registerForm" onSubmit={handleSubmit(onSubmitFunctionRegister)}>
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="name" id="name" name="name"  {...register("name")} />
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email"   {...register("email")} />
                        <label htmlFor="telephone">Celular:</label>
                        <input type="telephone" id="telephone" name="telephone"   {...register("telephone")} />
                        <button type="submit">Entrar</button>
                    </form>
                </Box>
            </Modal>
                <div>
                    <h2 onClick={() => { console.log(contacts) }}>Seus Contatos:</h2>
                    <AiOutlineFileAdd onClick={() => { setOpen(true) }} style={{ fontSize: '30px', cursor: 'pointer' }} />
                </div>
                <ul>
                    {contacts.length > 0 ? (<></>) : (<h3>Lista vazia, adicione contatos! <AiFillCloseSquare style={{ color: "red" }} /> </h3>)}
                    {
                        contacts.map(element => (
                            <li key={element.id}>
                                <div className="left-container">
                                    <h3>{element.name}</h3>
                                    <p>{element.email}</p>
                                    <span>{element.telephone}</span>

                                </div>
                                <div className="rigth-container">
                                    <ImWhatsapp style={{ fontSize: '30px', cursor: 'pointer', color: '#5AF31D' }} />
                                    <FaRegEdit style={{ fontSize: '30px', cursor: 'pointer', color: '#b5b822' }} />
                                    <CgTrash onClick={async () => {
                                        const response = await api.delete('/users/contacts/' + element.id, {
                                            headers: {
                                                Authorization: `Bearer ${localStorage.getItem("Token")}`
                                            }
                                        });
                                        const contactRemoved = contacts.filter(e => e.email !== localStorage.getItem("Email"))
                                        setContacts(contactRemoved)
                                        toast.success('Contato Removido com sucesso!', {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                        window.location.reload();

                                    }} style={{ fontSize: '30px', cursor: 'pointer', color: '#f31d1d' }} />


                                </div>
                            </li>

                        )

                        )
                    }
                </ul>

            </StyledDashboard>


        </>
    )
}