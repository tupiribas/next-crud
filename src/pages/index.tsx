import { AcaoAddCliente } from "../components/AcaoBotao";
import Leyout from "../components/Leyout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente"

export default function Home() {

  const clientes = [
    new Cliente('Tupi', 19, '1'),
    new Cliente('Maria', 25, '2'),
    new Cliente('Silva', 51, '3'),
    new Cliente('Vania', 51, '4'),
  ]

  function clientesSelecionados(clientes: Cliente) {
    console.log("Editou", clientes.nome);
  }

  function clientesExluidos(clientes: Cliente) {
    console.log("Excluiu: ", clientes.nome);
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500 
       text-white
    `}>

      <Leyout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <AcaoAddCliente  className="mb-4">
            Novo Cliente
          </AcaoAddCliente>
        </div>
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clientesSelecionados}
          clienteExcluido={clientesExluidos}
        />
      </Leyout>
    </div>
  )
}
