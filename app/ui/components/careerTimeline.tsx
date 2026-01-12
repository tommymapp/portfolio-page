import './careerTimeline.css';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import StackIcon from 'tech-stack-icons';
import Image, { StaticImageData } from 'next/image';
import aspenifyImage from '@/public/aspenify.svg';
import durellImage from '@/public/durell.svg';

export default function CareerTimeline() {
    const generateCard = (
        date: string,
        company: string,
        title: string,
        description: string,
        isRight: boolean = false,
        classes: string = '',
        techIcons: string[] = [],
        companyIcon?: StaticImageData,
        iconClass?: string
    ) => (
        <li
            className={`
            ${classes}
            grid w-full items-center
            ${isRight ? 'timeline-row-right' : ''}
            `}
        >
            <div className="shadow-sm shadow-secondary-500/50 bg-secondary-500/5 card box-border px-4 py-4 border-secondary-500/50 border-2 rounded-3xl">
                <p className="font-bold text-lg">{title}</p>
                <p className="text-sm opacity-60 -mt-0.5 font-thin">{company}</p>
                <p className="opacity-60 mt-2">{description}</p>
                <div className='mt-6 flex gap-3'>
                    {techIcons.map(icon => <StackIcon key={icon} className={`h-5 w-5 ${['expressjs', 'aws', 'mysql'].includes(icon) ? 'brightness-0 invert' : ''}`} name={icon} />)}
                </div>
                
            </div>
            <div className="h-[1px] bg-secondary-500 m-4 opacity-50"></div>
            <div className={`${companyIcon == null ? 'p-1.5' : 'p-0.25'} flex w-full justify-center bg-secondary-500 overflow-hidden rounded-full shadow-lg border-[4px] border-primary-500`} >
                {
                    companyIcon == null ? 
                        <BriefcaseIcon  className='h-full w-full text-primary-500'/>
                        :
                        <Image src={companyIcon} alt={`Icon of ${company}`} height='32' width='32' className={iconClass}/>
                }
                
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
                    ['js', 'react', 'expressjs', 'mongodb', 'nodejs'],
                    aspenifyImage,
                    'p-0.25 mr-[2px]'
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
                    ['net', 'c#', 'js', 'mysql', 'aws'],
                    durellImage
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
                    ['net', 'c#', 'js', 'mysql', 'aws'],
                    durellImage
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