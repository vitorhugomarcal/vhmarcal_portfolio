import { ShieldCheck } from "lucide-react";

interface Props {
  title: string;
  content: string;
  link: string;
  image: string;
}

export function Certificate({image, title, content, link}: Props) {
  return (
    <div className="max-w-md mx-8 mb-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl lg:max-w-6xl">
        <div className="md:flex lg:justify-center lg:items-center">
          <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:object-right md:w-80 lg:w-full lg:h-80" src={image} alt="Modern building architecture" />
          </div>
          <div className="p-8">
            <div className="flex flex-row text-center items-center gap-1 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              <ShieldCheck className='w-4 h-4' />
              {title}
            </div>
            <p className="mt-2 text-slate-500">{content}</p>
            <div className='flex gap-4 mt-4 items-center justify-center'>
              <a href={link} className="block text-md leading-tight font-light text-indigo-500 hover:underline">Show certificate</a>
            </div>
          </div>
        </div>
      </div>
  )
}