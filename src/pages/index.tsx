import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
      <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-blue-600
        text-white
      `}>
        <Layout titulo='Cadastro Simples'>
          <span>Conteudo</span>
        </Layout>
      </div>

     )
}
