import Leyout from "../components/Leyout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
       bg-gradient-to-r from-blue-500 to-purple-500 
       text-white
    `}>

      <Leyout titulo="Cadastro Simples">
        <span>Conteudo</span>
      </Leyout>
    </div>
  )
}
