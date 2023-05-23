import Image from "next/image";
import Construction from '../assets/construction.svg'
import { SiGithub, SiLinkedin, SiMailgun } from 'react-icons/si'

export default function Home() {
  return (
    <main className='h-screen relative grid grid-cols-1 lg:grid-cols-2 lg:gap-4 justify-items-center place-items-center px-8 lg:px-28 overflow-hidden'>
      <div className="-left-5 -top-5 absolute w-52 h-52 blur-5xl bg-gradient-to-r from-purple-600 to-blue-600" />
      <div className="-bottom-1/3 absolute w-52 h-52 blur-5xl bg-gradient-to-r from-purple-600 to-blue-600" />
      <div className="top-1/2 lg:-top-14 -right-52 lg:-right-14 absolute w-52 h-52 blur-5xl bg-gradient-to-r from-purple-600 to-blue-700" />

      <div className="flex gap-6 flex-col text-center lg:text-left items-center lg:items-start">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-700">Oops!</h1>
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <span className="font-bold text-4xl">Site em construção...</span>
          <p className="text-gray-100 font-base w-80 lg:text-left">
            Brevemente estará disponível por enquanto fique atento as minhas redes sociais ou entre em contacto:
          </p>
        </div>

        <span className="flex gap-3">
          <a href="https://github.com/Edlavio" target="_blank" rel="noreferrer" className="flex items-center text-gray-700 justify-center rounded w-8 h-8 bg-gray-200 hover:bg-gray-100 transition-colors">
            <SiGithub size={20}/>
          </a>
          <a href="https://www.linkedin.com/in/edlavio/" target="_blank" rel="noreferrer" className="flex items-center text-gray-700 justify-center rounded w-8 h-8 bg-gray-200 hover:bg-gray-100 transition-colors">
            <SiLinkedin size={20}/>
          </a>
          <a href="mailto:edlavioe@gmail.com" target="_blank" rel="noreferrer" className="flex items-center text-gray-700 justify-center rounded w-8 h-8 bg-gray-200 hover:bg-gray-100 transition-colors">
            <SiMailgun size={20}/>
          </a>
        </span>
      </div>

      <div>
        <Image src={Construction} alt='Under construction image' className="max-w-sm sm:max-w-[500px]" />
      </div>
    </main>
  )
}
