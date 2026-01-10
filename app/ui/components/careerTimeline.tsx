import './careerTimeline.css';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import StackIcon from 'tech-stack-icons';

export default function CareerTimeline() {
    const generateCard = (
        date: string,
        company: string,
        title: string,
        description: string,
        isRight: boolean = false,
        classes: string = '',
        techIcons: string[] = []
    ) => (
        <li
            className={`
            ${classes}
            grid w-full items-center
            ${isRight ? 'timeline-row-right' : ''}
            `}
        >
            <div className="card box-border px-4 py-4 border-secondary-500/50 border-2 bg-transparent rounded-3xl">
                <p className="font-bold text-lg">{title}</p>
                <p className="text-sm opacity-60 -mt-0.5 font-thin">{company}</p>
                <p className="opacity-60 mt-2">{description}</p>
                <div className='mt-6 flex gap-3'>
                    {techIcons.map(icon => <StackIcon key={icon} className={`h-5 w-5 ${['expressjs', 'aws'].includes(icon) ? 'brightness-0 invert' : ''}`} name={icon} />)}
                </div>
                
            </div>
            <div className="h-[1px] bg-secondary-500 m-4 opacity-50"></div>
            <div className='flex w-full justify-center bg-secondary-500 p-1.5 rounded-full shadow-lg border-[4px] border-primary-500' >
                <BriefcaseIcon  className='h-full w-full text-primary-500'/>
            </div>
            <div className={`date mx-4 text-sm opacity-75`}>{date}</div>
        </li>
        )


    return (
        <section className="h-full" id='timeline'>
          <h2>Career timeline</h2>
          <p className='opacity-60'>From SaaS startup, to InsurTech scale-ups, and now something new???</p>
          <ul className="timeline h-full w-full relative mt-12 py-8">
            {
                generateCard(
                    'March 2022', 
                    'Aspenify', 
                    'Junior Developer', 
                    'Built out product demos for venture capitalists and improved accessibility of core site.',
                    false,
                    '',
                    ['js', 'react', 'expressjs', 'mongodb', 'nodejs']
                )
            }
            {
                generateCard(
                    'Feb 2023', 
                    'Durell Software', 
                    'Junior Developer', 
                    'Started building foundation of modern policy admin system, in addition to implementing third-party intergrations & studying to AWS SAA-003.',
                    true,
                    'mt-12',
                    ['net', 'c#', 'js', 'mysql', 'aws']
                )
            }
            {
                generateCard(
                    'April 2024', 
                    'Durell Software', 
                    'Software Developer', 
                    'Lead team of three developing modern policy admin system, in addition to owning AWS infra after completing AWS SAA-003.',
                    false,
                    'mt-12',
                    ['net', 'c#', 'js', 'mysql', 'aws']
                )
            }
            {
                generateCard(
                    'Feb 2026', 
                    'To be announced', 
                    'Software Engineer', 
                    'Joining new company.',
                    true,
                    'mt-12'
                )
            }
          </ul>
        </section>
    )
}