import React, { useState } from 'react';
import api from '../../services/api';
import Cliente from '../../models/Cliente';

const CadastroCliente = () => {

    const [cliente, setCliente] = useState(new Cliente());

    async function handleAddCliente(e) {
        e.preventDefault();

        if (cliente.id === "") {
            //TODO está dando erro nessa linha
            return;
        }

        try {
            await api.post('cliente', cliente);
            setNewCliente('');

        } catch (error) {
            console.log('handleAddCliente error', error);
        }
        console.log('form submited');
    }

    // async () => {
    //       const response = await api.post('clientes');
    //       setTasks(response.data);
    //       console.log("loadTasks", response);
    //     }, []


    return (
        <>
            <fomr onSubmit={handleAddCliente}>
                <input
                    value={newCliente}
                    onChange={e => setNewCliente(e.target.value)}
                    type="text"
                    placeholder="Nome Completo" />
            </fomr>
        </>
    )
}

export default Cliente;


/*
async function handleAddTask(e){
    const params = {
        descricao: newTask,
        concluido: false
    };

    await api.post('tarefas', params);

    loadTasks(); <= não sei se é importante
    setNewTask(''); <= não sei se é importante
    setErrorMessage(''); <= não sei se é importante
    console.log("form submitted");

    return (
        <Form onSubmit={handleAddTask}>
        <input
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            type="text"
            placeholder="Digite a nova tarefa aqui..."/>

            <button type="submit">Criar</button>
        </Form>
        />
    )

*/