import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario (props: FormularioProps) {

    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto='Códico' 
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entrada 
                texto='Nome' 
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada 
                texto='Idade' 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            />

            <div className="mt-3 flex justify-end">
                <Botao 
                    cor="blue" 
                    className="
                        mr-2 bg-gradient-to-r 
                        from-blue-400 
                        to-blue-700
                    "
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} className="bg-gradient-to-r from-gray-400 to-gray-700">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}