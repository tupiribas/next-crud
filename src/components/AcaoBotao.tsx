interface AcaoBotaoProps {
    className?: string
    click?: () => void
    cor?: 'green' | 'blue' | 'gray'
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

export function Botao(props: AcaoBotaoProps) {
    const cor = props.cor ?? 'gray'
    return (
        <button className={`
            bg-gradient-to-l from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}