import StackIcon from 'tech-stack-icons';
import { CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const howIHelpData = [
    {
        title: 'Full-stack development',
        description: 'I develop modern solution, from sleek UX, building secure & performant APIs to designing robust application',
        icon: CodeBracketIcon
    },
    {
        title: 'AWS development',
        description: 'I design secure, scalable & maintainable software systems in a varity of contexts using AWS.',
        icon: (props:React.ComponentProps<'svg'>) => <StackIcon {...props} className={`${props.className} brightness-0 invert`} name='aws' />
    },
    
    {
        title: 'Process improvment',
        description: 'I lead others and implement improvements allowing others to be better at their job, from DevOps to workflows.',
        icon: ChartBarIcon
    }
]

export default function HowIHelp() {
    const helpCard = ({ title, description, icon: Icon }: {title: string, description:string, icon: React.ComponentType<{className?:string }>}) => (
        <li key={title} className="flex gap-3 border-2 border-secondary-500/50 px-4 pt-2 pb-6 rounded-3xl w-full lg:w-1/3">
            <Icon className='h-20 min-w-12 w-12'/>
            <div>
                <p className="font-semibold text-lg mt-2 lg:mt-3.5">{title}</p>
                <p className="opacity-60 mt-1">{description}</p>
            </div>
            
        </li>
    )

    return (
        <section id='howIHelp'>
          <h2>
            How I help
          </h2>
          <p className='opacity-60'>From designing product, building secure, scalable & sleek applications to improving tech-culture to exceed team goals.</p>
          <ul className="flex flex-col lg:flex-row justify-center align-center w-full gap-8 py-12 ">
            {
                howIHelpData.map(d => helpCard(d))
            }
          </ul>
        </section>
    )
}