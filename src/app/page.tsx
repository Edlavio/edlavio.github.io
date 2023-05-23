import Image from "next/image";
import Construction from '../assets/construction.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

export default function Home() {
  return (
    <main className='grid grid-cols-2 place-items-center h-screen px-28'>
      <div className="flex gap-6 flex-col">
        <h1 className="text-5xl font-bold text-purple-400">Oops!</h1>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-4xl ">Site em construção...</span>
          <p className="text-gray-100 font-base w-[370px]">
            Brevemente estará disponível por enquanto fique atento as minhas redes sociais ou entre em contacto:
          </p>
        </div>

        <span className="flex gap-3">
          <a href="https://github.com/Edlavio" target="_blank" rel="noreferrer" className="flex items-center text-gray-700 justify-center rounded w-8 h-8 bg-gray-200 hover:bg-gray-100 transition-colors">
            <FaGithub size={20}/>
          </a>
          <a href="https://www.linkedin.com/in/edlavio/" target="_blank" rel="noreferrer" className="flex items-center text-gray-700 justify-center rounded w-8 h-8 bg-gray-200 hover:bg-gray-100 transition-colors">
            <FaLinkedin size={20}/>
          </a>
          <a href="mailto:edlavioe@gmail.com" target="_blank" rel="noreferrer" className="flex items-center text-gray-700 justify-center rounded w-8 h-8 bg-gray-200 hover:bg-gray-100 transition-colors">
            <MdAlternateEmail size={20}/>
          </a>
        </span>
      </div>

      <div>
        <Image src={Construction} alt='Under construction image' className="max-w-[500px]" />
      </div>
    </main>
  )
}
