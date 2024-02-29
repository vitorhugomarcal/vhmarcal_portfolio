import inSvg from './assets/linkedin.svg'
import instaSvg from './assets/insta.svg'
import githubSvg from './assets/github.svg'
import html from './assets/html.svg'
import css from './assets/css.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'
import javascript from './assets/javascript.svg'
import typescript from './assets/typescript.svg'
import nodejs from './assets/nodejs.svg'
import firebase from './assets/firebase.svg'
import docker from './assets/docker.svg'
import mongodb from './assets/mongodb.svg'
import git from './assets/git.svg'
import figma from './assets/figma.svg'
import photoshop from './assets/photoshop.svg'
import illustrator from './assets/illustrator.svg'
import after from './assets/after.svg'
import eu from './assets/eu.jpg'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpeg'
import c1 from './assets/c1.png'
import c2 from './assets/c2.png'
import c3 from './assets/c3.png'
import c4 from './assets/c4.png'
import c5 from './assets/c5.png'
import { ArrowDownToLine, Code2, MessageCircle, Send } from 'lucide-react'
import { Certificate } from './components/Certificate'
import { Project } from './components/Project'




export function App() {
  
  return (
    <>
    <div className='flex flex-col lg:flex-row px-8 pt-8 min-h-screen max-h-screen justify-between lg:justify-center lg:gap-8 lg:items-center '>
      <header className=' md:hidden flex flex-col items-center justify-center'>
        <div className='flex-row gap-2 md:hidden flex '>
          <a href='https://www.linkedin.com/in/vhmarcal' target='blank' className='hover:ring-2 hover:ring-amber-500 hover:scale-110 rounded-full transition-all'>
            <img src={inSvg} alt="Linkedin" className='w-8 h-8' />
          </a>
          <a href='https://github.com/vitorhugomarcal' target='blank' className='hover:ring-2 hover:ring-amber-500 hover:scale-110 rounded-full transition-all'>
            <img src={githubSvg} alt="GitHub" className='w-8 h-8' />
          </a>
          <a href='https://instagram.com/vitorhugomarcal' target='blank' className='hover:ring-2 hover:ring-amber-500 hover:scale-110 rounded-full transition-all'>
            <img src={instaSvg} alt="Instagram" className='w-8 h-8' />
          </a>
        </div>
      </header>
      
      <div className='flex justify-center mt-6'>
        <img src={eu} className='w-96 h-96  rounded-full object-cover object-center drop-shadow-lg' />
      </div>

      <div className='flex flex-col'>
          <div className='bg-slate-800 rounded-md text-left px-4 py-2 w-fit my-6'>
            <p className='text-blue-300'>👋 Olá!</p>
          </div>
          <div className=''>
            <h1 className="flex max-w-48 text-4xl font-extrabold">
              Vitor Hugo Marçal
            </h1>
            <p className="text-md mt-4 font-semibold text-slate-500 lg:max-w-80">
              FullStack Developer | Javascript | Typescript | Node | React.js | React Native
            </p>
            <span className='hidden md:flex md:mt-4 lg:max-w-lg'>
              Over 6 years of experience. I specialize in building
            innovative web and mobile applications using technologies such as React,
            React Native, and Node.js.
            </span>
          </div>
            <div className='flex-row gap-2 hidden md:flex md:mt-4'>
              <img src={inSvg} alt="Acessar meu Linkedin" className='w-8 h-8' />
              <img src={githubSvg} alt="Acessar meu GitHub" className='w-8 h-8' />
              <img src={instaSvg} alt="Acessar meu Instagram" className='w-8 h-8' />
            </div>
          <div className='flex gap-8 md:mb-4'>
            <button className="flex items-center gap-[4px] justify-center mt-4 text-sm font-light text-blue-600 hover:text-blue-700 group transition-colors">
             Download CV
              <ArrowDownToLine className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
            </button>
            <button className="flex items-center text-sm font-light bg-blue-600 gap-2 justify-center mt-4 text-blue-100 hover:ring-2 hover:ring-amber-500 px-4 py-2 rounded-xl group transition-all">
              <MessageCircle className="h-4 w-4 text-blue-100 group-hover:text-amber-500" />
              Let's chat now!
            </button>
          </div>

      </div>
    </div>
    <div className='border-[1px] border-slate-200 my-8 mx-8' />
    <div className='relative max-w-screen mb-8 h-full overflow-hidden'>
      
      <div className='flex justify-center items-center w-fit h-full gap-6 animate-scroll-left' >
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={html} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={css} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={react} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={javascript} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={typescript} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={tailwind} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={nodejs} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={git} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={docker} className='w-10 h-10'/>
        </div>

        <div className='flex items-center justify-center w-10 h-full'>
          <img src={firebase} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={mongodb} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={figma} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={photoshop} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={illustrator} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={after} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={html} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={css} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={react} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={javascript} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={typescript} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={tailwind} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={nodejs} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={git} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={docker} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-full'>
          <img src={firebase} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={mongodb} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={figma} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={photoshop} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={illustrator} className='w-10 h-10'/>
        </div>
        <div className='flex items-center justify-center w-10 h-10'>
          <img src={after} className='w-10 h-10'/>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-300 via-transparent to-slate-300"></div>
    </div>
      <div className='lg:justify-center lg:flex'>
      <div className='border-2 border-slate-200 p-6 mx-8 mb-8 lg:mb-0 flex flex-col justify-center items-center rounded-xl lg:max-w-xs'>
        <Code2 className='w-16 h-16'/>
        <span className='font-light text-md text-slate-600'>6 years as a</span>
        <h1 className='text-4xl font-bold'>Developer</h1>
      </div>
      </div>

      <div className='border-[1px] border-slate-200 my-8 mx-8' />
      <div className='flex bg-slate-800 rounded-md text-left items-center mx-8 px-4 py-2 w-fit my-6'>
        <p className='text-blue-300'>👨‍💻 About me</p>
      </div>

      <div className='lg:flex  lg:justify-center lg:items-center lg:text-center'>
        <p className='mx-8 text-center lg:max-w-4xl '>
        🚀 Welcome to my profile! <span className='font-bold'>I'm Vitor Hugo</span>, a developer specializing in <span className='font-bold'>React.js</span> and <span className='font-bold'>React Native</span>. With a strong technical background, I am dedicated to creating exceptional software solutions that <span className='font-bold'>provide memorable user experiences</span>.
        </p>
      </div>
      <div className='border-[1px] border-slate-200 my-8 mx-8' />
      
      <div className='flex bg-slate-800 rounded-md text-left items-center mx-8 px-4 py-2 w-fit my-6'>
        <p className='text-blue-300'>🛠️ Projects</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <Project
        image={p1}
        title='T.A. Personal'
        content="🏋️‍♂️ I'm excited to share an app that is transforming the way you train and interact with your clients. 🌟"
        subcontent='Student Management App'
        android='https://bit.ly/TAPersonal_PlayStore'
        ios='https://bit.ly/TAPersonal_AppStore'
      />

      <Project
        image={p2}
        title='Habits'
        content="After NLW, I decided to develop more features for this daily habit tracking app. I implemented the social login screen, added notifications, and incorporated some animations that made the app much more personalized."
        subcontent='Habit Tracking App'
        android='https://bit.ly/vhmarcalhabits'
      />
      </div>

      <a href='https://github.com/vitorhugomarcal' className="flex justify-center text-md leading-tight font-light text-indigo-500 hover:underline">Show all projects on Github</a>

      <div className='border-[1px] border-slate-200 my-8 mx-8' />

      <div className='flex bg-slate-800 rounded-md text-left items-center mx-8 px-4 py-2 w-fit my-6'>
        <p className='text-blue-300'>🚀 Certificates</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <Certificate
        image={c1}
        title='React Native - 75h'
        content='Fundamentos React Native e Expo, Navegação e Armazenamento local, Component Library e Formulários, Consumo de API, Push Notifications e Deep Linking, Animações e Microinterações, Offline First e Mapas, Testes e Deploy.' 
        link='https://app.rocketseat.com.br/certificates/047941f3-2319-4967-911e-abc30bead2fb'
      />
      <Certificate
        image={c2}
        title='Especializar - 11h'
        content='JavaScript Assíncrono e Promises, APIs, Fundamentos de ReactJS e TypeScript, GitHub para times, CSS Transition e Animation, SQL Avançado.' 
        link='https://app.rocketseat.com.br/certificates/33b340f5-5e2d-449b-86e2-53dec1b13822'
      />
      <Certificate
        image={c3}
        title='Fundamentar - 28h'
        content='Fundamentos de HTML, CSS, JavaScript, DOM, Terminal, NodeJS, EJS, SQL, Estrutura de Dados, Programação Orientada a Objetos, Programação Funcional, Git, GitHub e HTTP.' 
        link='https://app.rocketseat.com.br/certificates/5809b945-957d-466a-8213-344a3850995f'
      />
      <Certificate
        image={c4}
        title='NLW Expert - React - 5h'
        content='Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, uso de APIs da Web como Web Storage e Web Speech.' 
        link='https://app.rocketseat.com.br/certificates/55d3a2ef-155f-4e3b-bf92-feb103601ff1'
      />
      <Certificate
        image={c5}
        title='NLW Expert - React Native - 5h'
        content='Desenvolvimento de uma aplicação mobile em React Native, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, Expo Framework, interface com Native Wind, gerenciamento de estado global com Zustand, roteamento por arquivos com Expo Router.' 
        link='https://app.rocketseat.com.br/certificates/e315f246-75ae-4463-a379-bc39548991f9'
      />
      </div>

      <div className='border-[1px] border-slate-200 my-8 mx-8' />

      <div className='flex bg-slate-800 rounded-md text-left items-center mx-8 px-4 py-2 w-fit my-6'>
        <p className='text-blue-300'>📌 Contact</p>
      </div>

      <div className=' flex mx-8 justify-center gap-4 items-center'>
        <a href='https://wa.me/5511946202703' className="flex items-center text-sm font-light bg-blue-600 gap-2 justify-center mt-4 text-blue-100 hover:ring-2 hover:ring-amber-500 px-4 py-2 rounded-xl group transition-all">
          <MessageCircle className="h-4 w-4 text-blue-100 group-hover:text-amber-500" />
          WhatsApp!
        </a>
        <a href='mailto:vitorhugomarcal@gmail.com' className="flex items-center text-sm font-light bg-blue-600 gap-2 justify-center mt-4 text-blue-100 hover:ring-2 hover:ring-amber-500 px-4 py-2 rounded-xl group transition-all">
          <Send className="h-4 w-4 text-blue-100 group-hover:text-amber-500" />
          Mail!
        </a>
      </div>

      <div className='border-[1px] border-slate-200 my-8 mx-8' />

      <footer className='flex justify-between mx-8 items-center mb-8'>
        <p className='text-sm font-light text-slate-500'>Copyright © Vitor Hugo Marçal - 2024</p>
        <div className='flex-row gap-2 md:hidden flex'>
          <a href='https://www.linkedin.com/in/vhmarcal' target='blank' className='hover:ring-2 hover:ring-amber-500 hover:scale-110 rounded-full transition-all'>
            <img src={inSvg} alt="Acessar meu Linkedin" className='w-8 h-8' />
          </a>
          <a href='https://github.com/vitorhugomarcal' target='blank' className='hover:ring-2 hover:ring-amber-500 hover:scale-110 rounded-full transition-all'>
            <img src={githubSvg} alt="Acessar meu GitHub" className='w-8 h-8' />
          </a>
          <a href='https://instagram.com/vitorhugomarcal' target='blank' className='hover:ring-2 hover:ring-amber-500 hover:scale-110 rounded-full transition-all'>
            <img src={instaSvg} alt="Acessar meu Instagram" className='w-8 h-8' />
          </a>
        </div>
      </footer>

    </>
  )
}
