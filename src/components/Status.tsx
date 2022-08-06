interface StatusProps {
    tipoAlteracao: 'salvar' | 'alterar'
    valor: string
}

export default function Status(props: StatusProps) {
    return (
        <div className="flex justify-center p-1">
            {
                props.tipoAlteracao === 'salvar' ?
                (
                    <p className="text-blue-500">
                        {props.valor} foi alterado com sucesso
                    </p>
                ) :
                (
                    <p className="text-green-500 font-medium">
                        {props.valor} foi salvo com sucesso!
                    </p>
                )
            }
        </div>
    )
}