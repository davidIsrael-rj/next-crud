import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carla', 25, '3'),
    new Cliente('Pedro', 55, '4'),
  ]
  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir...${cliente.nome}`)
  }

  return (

    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-blue-600
        text-white
      `}>
      <Layout titulo='Cadastro Simples'>
        <div className='flex justify-end'>
          <Botao cor="green" className='mb-4'>Novo Cliente</Botao>
        </div>
        <Formulario cliente={clientes[0]}/>
        {/* <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        /> */}
      </Layout>
    </div>

  )
}
