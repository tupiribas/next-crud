import Cliente from "../core/Cliente";

interface AvisoProps {
    cliente: Cliente;
    clienteAlterado: boolean;
}

export default function Aviso(props: AvisoProps) {
    const cliente = props.cliente
    return (
        <div className="flex justify-center p-1">
            {props.clienteAlterado ? (
                <p className="text-green-500 font-medium">
                    {cliente.nome} foi alterado com sucesso!
                </p>
            ) : 
            (
                <p className="text-blue-500">
                    {cliente.nome} foi salvo com sucesso
                </p>
            )}
        </div>
    )
}