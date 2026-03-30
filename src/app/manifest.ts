import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vitor Hugo Marçal | FullStack Developer',
    short_name: 'VHM Portfolio',
    description: 'Senior FullStack Developer specializing in React, React Native and Node.js with AI-Integrated workflows.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon-light.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
