import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useClientes from '../hooks/useClientes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()


  return (

    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-blue-600
        text-white
      `}>
      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao cor="green" className='mb-4'
                // onClick={() => setVisivel('form')}
                onClick={novoCliente}
              >Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>

        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />

        )}
      </Layout>
    </div>

  )
}
