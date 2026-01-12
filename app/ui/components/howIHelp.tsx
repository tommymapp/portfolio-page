import StackIcon from 'tech-stack-icons';
import { CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const howIHelpData = [
    {
        title: 'Full-stack development',
        description: 'I develop modern solutions end-to-end, from intentional user experiences to robust backend APIs.',
        icon: CodeBracketIcon
    },
    {
        title: 'AWS development',
        description: 'I architect scalable, resilient, efficient and fault-tolerant infrastructure dependent on customer needs.',
        icon: (props:React.ComponentProps<'svg'>) => <StackIcon {...props} className={`${props.className} brightness-0 invert`} name='aws' />
    },
    
    {
        title: 'Leadership',
        description: 'I proactively mentor others and improve development processes to help teams perform more effectively.',
        icon: ChartBarIcon
    }
]

export default function HowIHelp() {
    const helpCard = ({ title, description, icon: Icon }: {title: string, description:string, icon: React.ComponentType<{className?:string }>}) => (
        <li key={title} className="shadow-sm shadow-secondary-500/50 bg-secondary-500/5 flex gap-3 border-2 border-secondary-500/50 p-4 rounded-3xl w-full lg:w-1/3">
            <Icon className='mb-auto h-min min-w-12 w-12'/>
            <div>
                <p className="font-semibold text-lg">{title}</p>
                <p className="opacity-60 mt-1">{description}</p>
            </div>
        </li>
    )

    return (
        <section id='howIHelp'>
          <h2>
            How I help
          </h2>
          <p className='opacity-60 mt-2'>From creating products and building infrastructure to empowering software teams to work more effectively.</p>
          <ul className="flex flex-col lg:flex-row justify-center align-center w-full gap-8 py-12 ">
            {
                howIHelpData.map(d => helpCard(d))
            }
          </ul>
        </section>
    )
}