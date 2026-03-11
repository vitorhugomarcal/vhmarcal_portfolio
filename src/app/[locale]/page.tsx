"use client";

import { MessageCircle, Send, Code2 } from 'lucide-react';
import { Certificate } from '../../components/Certificate';
import { Project } from '../../components/Project';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const techIcons = [
  { src: '/html.svg', alt: 'HTML' },
  { src: '/css.svg', alt: 'CSS' },
  { src: '/react.svg', alt: 'React' },
  { src: '/javascript.svg', alt: 'JavaScript' },
  { src: '/typescript.svg', alt: 'TypeScript' },
  { src: '/tailwind.svg', alt: 'Tailwind' },
  { src: '/nodejs.svg', alt: 'Node.js' },
  { src: '/git.svg', alt: 'Git' },
  { src: '/docker.svg', alt: 'Docker' },
  { src: '/firebase.svg', alt: 'Firebase' },
  { src: '/mongodb.svg', alt: 'MongoDB' },
  { src: '/figma.svg', alt: 'Figma' },
  { src: '/photoshop.svg', alt: 'Photoshop' },
  { src: '/illustrator.svg', alt: 'Illustrator' },
  { src: '/after.svg', alt: 'After Effects' },
];

const allTechIcons = [...techIcons, ...techIcons, ...techIcons, ...techIcons];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

export default function Home() {
  const tHero = useTranslations('Hero');
  const tAbout = useTranslations('About');
  const tProjects = useTranslations('Projects');
  const tExperience = useTranslations('Experience');
  const tCertificates = useTranslations('Certificates');
  const tContact = useTranslations('Contact');
  const tFooter = useTranslations('Footer');

  return (
    <>
      <LanguageSwitcher />
      
      <div className='flex flex-col lg:flex-row px-8 pt-8 min-h-screen justify-between lg:justify-center lg:gap-8 lg:items-center'>
        
        {/* Mobile Header Socials */}
        <motion.header
          className='md:hidden flex flex-col items-center justify-center'
          {...fadeUp(0.1)}
        >
          <div className='flex-row gap-2 md:hidden flex'>
            {[
              { href: 'https://www.linkedin.com/in/vhmarcal', src: '/linkedin.svg', alt: 'Linkedin' },
              { href: 'https://github.com/vitorhugomarcal', src: '/github.svg', alt: 'GitHub' },
              { href: 'https://instagram.com/vitorhugomarcal', src: '/insta.svg', alt: 'Instagram' },
            ].map(({ href, src, alt }) => (
              <motion.a
                key={alt}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:ring-2 hover:ring-amber-500 rounded-full transition-all'
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={src} alt={alt} className='w-8 h-8' />
              </motion.a>
            ))}
          </div>
        </motion.header>

        {/* Profile Image */}
        <motion.div
          className='flex justify-center mt-6'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.img
            src="/eu.jpg"
            className='w-96 h-96 rounded-full object-cover object-center drop-shadow-lg'
            whileHover={{ scale: 1.03, boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Hero Section */}
        <div className='flex flex-col'>
          <motion.div
            className='bg-slate-800 rounded-md text-left px-4 py-2 w-fit my-6'
            {...fadeUp(0.2)}
          >
            <p className='text-blue-300'>{tHero('hello')}</p>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <h1 className="flex max-w-lg text-4xl font-bold">
              Vitor Hugo Marçal
            </h1>
            <p className="text-lg mt-4 font-semibold text-slate-600 lg:max-w-xl">
              {tHero('fullstack')}
            </p>
            <p className="text-md mt-2 font-medium text-slate-500 lg:max-w-xl italic">
              {tHero('specialized')}
            </p>
            <span className='hidden md:flex md:mt-4 lg:max-w-lg text-slate-700 leading-relaxed'>
              {tHero('description')}
            </span>
          </motion.div>

          {/* Desktop Socials */}
          <motion.div
            className='flex-row gap-2 hidden md:flex md:mt-4'
            {...fadeUp(0.4)}
          >
            {[
              { href: 'https://www.linkedin.com/in/vhmarcal', src: '/linkedin.svg', alt: 'Linkedin' },
              { href: 'https://github.com/vitorhugomarcal', src: '/github.svg', alt: 'GitHub' },
              { href: 'https://instagram.com/vitorhugomarcal', src: '/insta.svg', alt: 'Instagram' },
            ].map(({ href, src, alt }) => (
              <motion.a
                key={alt}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:ring-2 hover:ring-amber-500 rounded-full transition-all'
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={src} alt={alt} className='w-8 h-8' />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className='flex gap-8 md:mb-4'
            {...fadeUp(0.5)}
          >
            <motion.a
              href='https://wa.me/5511946202703'
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center text-sm font-light bg-blue-600 gap-2 justify-center mt-4 text-blue-100 hover:ring-2 hover:ring-amber-500 px-6 py-2 rounded-xl group transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-4 w-4 text-blue-100 group-hover:text-amber-500" />
              {tHero('chat')}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        className='border border-slate-200 my-8 mx-8'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      {/* Skills Banner */}
      <div className='relative max-w-screen mb-8 h-full overflow-hidden'>
        <div className='flex justify-center items-center w-fit h-full gap-6 animate-scroll-left'>
          {allTechIcons.map((icon, i) => (
            <motion.div
              key={i}
              className='flex items-center justify-center w-10 h-10'
              whileHover={{ scale: 1.3, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <img src={icon.src} className='w-10 h-10' alt={icon.alt} title={icon.alt} />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-100 via-transparent to-slate-100 pointer-events-none" />
      </div>

      {/* Years of Experience */}
      <div className='lg:justify-center lg:flex'>
        <motion.div
          className='border-2 border-slate-200 p-6 mx-8 mb-8 lg:mb-0 flex flex-col justify-center items-center rounded-xl lg:max-w-xs'
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ borderColor: '#3b82f6', boxShadow: '0 8px 30px rgba(59,130,246,0.15)' }}
        >
          <motion.div
            initial={{ rotate: -10, scale: 0.6 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Code2 className='w-16 h-16' />
          </motion.div>
          <span className='font-light text-md text-slate-600'>6 {tExperience('years')}</span>
          <h2 className='text-4xl font-bold'>Developer</h2>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className='border border-slate-200 my-8 mx-8'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      {/* About Me Section */}
      <div className='flex justify-center items-center text-center'>
        <motion.div
          className='flex bg-slate-800 rounded-md text-left items-center mx-8 px-4 py-2 w-fit my-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-blue-300'>{tAbout('title')}</p>
        </motion.div>
      </div>

      <motion.div
        className='lg:flex lg:justify-center lg:items-center px-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className='max-w-4xl text-left lg:text-center space-y-4'>
          <p className='text-slate-700 leading-relaxed'>
            {tAbout('intro')}
          </p>
          
          <div className='bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left'>
            <h3 className='font-bold text-slate-900 mb-3 flex items-center gap-2'>
              <span className='text-xl'>🤖</span> {tAbout('aiTitle')}
            </h3>
            <p className='text-sm text-slate-600 mb-4'>
              {tAbout('aiSubtitle')}
            </p>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700'>
              <li className='flex items-center gap-2'>• {tAbout('ai1')}</li>
              <li className='flex items-center gap-2'>• {tAbout('ai2')}</li>
              <li className='flex items-center gap-2'>• {tAbout('ai3')}</li>
              <li className='flex items-center gap-2'>• {tAbout('ai4')}</li>
              <li className='flex items-center gap-2'>• {tAbout('ai5')}</li>
              <li className='flex items-center gap-2'>• {tAbout('ai6')}</li>
            </ul>
          </div>

          <p className='text-slate-700 leading-relaxed'>
            {tAbout('outro')}
          </p>
          
          <p className='text-slate-800 font-medium pt-2 italic text-center'>
            {tAbout('quote')}
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className='border border-slate-200 my-8 mx-8'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      {/* Projects Section */}
      <div className='flex justify-center items-center text-center'>
        <motion.div
          className='flex bg-slate-800 rounded-md text-left items-center mx-8 px-4 py-2 w-fit my-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-blue-300'>{tProjects('title')}</p>
        </motion.div>
      </div>

      <div className='flex flex-col justify-center items-center w-full'>
        <Project
          image="/invoice_orbizy.webp"
          title='Orbizy Invoice'
          content={tProjects('invoice.desc')}
          subcontent={tProjects('invoice.sub')}
          android='https://invoice.orbizy.app'
          visitLabel={tProjects('visit')}
        />

        <Project
          image="/play_orbizy.png"
          title='Orbizy Play'
          content={tProjects('play.desc')}
          subcontent={tProjects('play.sub')}
          android='https://play.orbizy.app'
          visitLabel={tProjects('visit')}
        />

        <Project
          image="/p1.jpg"
          title='T.A. Personal'
          content={tProjects('ta.desc')}
          subcontent={tProjects('ta.sub')}
          android='https://bit.ly/TAPersonal_PlayStore'
          ios='https://bit.ly/TAPersonal_AppStore'
        />

        <Project
          image="/p2.jpeg"
          title='Habits'
          content={tProjects('habits.desc')}
          subcontent={tProjects('habits.sub')}
          android='https://bit.ly/vhmarcalhabits'
        />
      </div>

      <motion.a
        href='https://github.com/vitorhugomarcal'
        target='_blank'
        rel='noopener noreferrer'
        className="flex justify-center text-md leading-tight font-light text-indigo-500 hover:underline"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {tProjects('github')}
      </motion.a>

      {/* Divider */}
      <motion.div
        className='border border-slate-200 my-8 mx-8'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      {/* Certificates Section */}
      <div className='flex justify-center items-center text-center'>
        <motion.div
          className='flex bg-slate-800 rounded-md text-left items-center mx-8 px-4 py-2 w-fit my-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-blue-300'>{tCertificates('title')}</p>
        </motion.div>
      </div>

      <div className='flex flex-col justify-center items-center w-full'>
        <Certificate 
          image="/c1.png" 
          title='React Native - 75h' 
          content='Fundamentos React Native e Expo, Navegação e Armazenamento local, Component Library e Formulários, Consumo de API, Push Notifications e Deep Linking, Animações e Microinterações, Offline First e Mapas, Testes e Deploy.' 
          link='https://app.rocketseat.com.br/certificates/047941f3-2319-4967-911e-abc30bead2fb' 
          label={tCertificates('show')}
        />
        <Certificate 
          image="/c2.png" 
          title='Especializar - 11h' 
          content='JavaScript Assíncrono e Promises, APIs, Fundamentos de ReactJS e TypeScript, GitHub para times, CSS Transition e Animation, SQL Avançado.' 
          link='https://app.rocketseat.com.br/certificates/33b340f5-5e2d-449b-86e2-53dec1b13822' 
          label={tCertificates('show')}
        />
        <Certificate 
          image="/c3.png" 
          title='Fundamentar - 28h' 
          content='Fundamentos de HTML, CSS, JavaScript, DOM, Terminal, NodeJS, EJS, SQL, Estrutura de Dados, Programação Orientada a Objetos, Programação Funcional, Git, GitHub e HTTP.' 
          link='https://app.rocketseat.com.br/certificates/5809b945-957d-466a-8213-344a3850995f' 
          label={tCertificates('show')}
        />
        <Certificate 
          image="/c4.png" 
          title='NLW Expert - React - 5h' 
          content='Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, uso de APIs da Web como Web Storage e Web Speech.' 
          link='https://app.rocketseat.com.br/certificates/55d3a2ef-155f-4e3b-bf92-feb103601ff1' 
          label={tCertificates('show')}
        />
        <Certificate 
          image="/c5.png" 
          title='NLW Expert - React Native - 5h' 
          content='Desenvolvimento de uma aplicação mobile em React Native, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, Expo Framework, interface com Native Wind, gerenciamento de estado global com Zustand, roteamento por arquivos com Expo Router.' 
          link='https://app.rocketseat.com.br/certificates/e315f246-75ae-4463-a379-bc39548991f9' 
          label={tCertificates('show')}
        />
      </div>

      {/* Divider */}
      <motion.div
        className='border border-slate-200 my-8 mx-8'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      {/* Contact Section */}
      <div className='flex justify-center items-center text-center'>
        <motion.div
          className='flex bg-slate-800 rounded-md text-left items-center mx-8 px-4 py-2 w-fit my-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-blue-300'>{tContact('title')}</p>
        </motion.div>
      </div>

      <motion.div
        className='flex mx-8 justify-center gap-4 items-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href='https://wa.me/5511946202703'
          target='_blank'
          rel='noopener noreferrer'
          className="flex items-center text-sm font-light bg-blue-600 gap-2 justify-center mt-4 text-blue-100 hover:ring-2 hover:ring-amber-500 px-4 py-2 rounded-xl group transition-all"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="h-4 w-4 text-blue-100 group-hover:text-amber-500" />
          WhatsApp!
        </motion.a>
        <motion.a
          href='mailto:vitorhugomarcal@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className="flex items-center text-sm font-light bg-blue-600 gap-2 justify-center mt-4 text-blue-100 hover:ring-2 hover:ring-amber-500 px-4 py-2 rounded-xl group transition-all"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send className="h-4 w-4 text-blue-100 group-hover:text-amber-500" />
          Mail!
        </motion.a>
      </motion.div>

      {/* Divider */}
      <motion.div
        className='border border-slate-200 my-8 mx-8'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      {/* Footer */}
      <motion.footer
        className='flex justify-between mx-8 items-center mb-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-sm font-light text-slate-500'>{tFooter('copyright')} - 2026</p>
        <div className='flex-row gap-2 flex'>
          {[
            { href: 'https://www.linkedin.com/in/vhmarcal', src: '/linkedin.svg', alt: 'Linkedin' },
            { href: 'https://github.com/vitorhugomarcal', src: '/github.svg', alt: 'GitHub' },
            { href: 'https://instagram.com/vitorhugomarcal', src: '/insta.svg', alt: 'Instagram' },
          ].map(({ href, src, alt }) => (
            <motion.a
              key={alt}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:ring-2 hover:ring-amber-500 rounded-full transition-all'
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={src} alt={alt} className='w-8 h-8' />
            </motion.a>
          ))}
        </div>
      </motion.footer>
    </>
  );
}
