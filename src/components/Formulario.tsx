import React, { useState } from "react";
import Cliente from "../core/Cliente";
import { Botao } from "./AcaoBotao";
import Aviso from "./Aviso";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente;
    clienteMudou?: (cliente: Cliente) => void;
    cancelado: () => void;
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    const [aviso, setAviso] = useState(false)

    return (
        <div>
            {aviso ? (
                <Aviso 
                    clienteAlterado={id ? true : false}
                    cliente={props.cliente}
                />
            ) : false}
            {id ? (
                <div>   
                    <Entrada texto="Código" valor={id} tipo="text"/>
                </div>
            ) : (
                `${false}`

            )}
            <Entrada 
                texto="Nome" 
                valor={nome} 
                setValor={setNome} 
                tipo="text"
                className="mb-4"
            />
            <Entrada 
                texto="Idade" 
                valor={idade} 
                setValor={setIdade} 
                tipo="number"
            />
            <div className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2"
                   click={() => {
                        props.clienteMudou?.(new Cliente(nome, +idade, id))
                        setAviso(true)
                        }} >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao click={() => props.cancelado?.()}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}