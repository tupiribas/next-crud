import React, { useState } from "react";
import Cliente from "../core/Cliente";
import { Botao } from "./AcaoBotao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} tipo="text"/>
            ) : false}
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
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}