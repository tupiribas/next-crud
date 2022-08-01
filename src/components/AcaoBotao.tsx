interface AcaoBotaoProps {
    click?: () => void
    children: any
}

export function AcaoEditar(props: AcaoBotaoProps) {
    return (
        <button 
        onClick={props.click} 
        className={`
            flex {justify-center items-center p-2 
            text-green-600 rounded-full
            hover: bg-purple-50
        `}>
            {props.children}
        </button>
    )
}

export function AcaoExcluir(props: AcaoBotaoProps) {
    return (
        <button
        onClick={props.click}
        className={`
            flex {justify-center items-center p-2
            text-red-600 rounded-full
            hover: bg-purple-50
        `}>
            {props.children}
        </button>
    )
}