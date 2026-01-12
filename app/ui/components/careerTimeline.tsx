import './careerTimeline.css';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import StackIcon from 'tech-stack-icons';
import Image, { StaticImageData } from 'next/image';
import aspenifyImage from '@/public/aspenify.svg';
import durellImage from '@/public/durell.svg';
import madetechImage from '@/public/madetech.svg';
import Link from 'next/link';

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
        iconClass?: string,
        companyLink: string = ''
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
                    {techIcons.map(icon => <div className='relative group' key={icon}>
                        <StackIcon className={`h-5 w-5 ${['expressjs', 'aws', 'mysql'].includes(icon) ? 'brightness-0 invert' : ''}`} name={icon} />
                         <span className="left-0  absolute bottom-full mb-2 px-2 py-1 text-xs rounded-lg bg-secondary-500 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            {icon}
                        </span>
                    </div>)}
                </div>
                
            </div>
            <div className="h-[1px] bg-secondary-500 m-4 opacity-50"></div>
            <Link href={companyLink} target='_blank' className={`${companyIcon == null ? 'p-1.5' : 'p-0.25'} flex w-full justify-center bg-secondary-500 overflow-hidden rounded-full shadow-lg border-[4px] border-primary-500`} >
                {
                    companyIcon == null ? 
                        <BriefcaseIcon  className='h-full w-full text-primary-500'/>
                        :
                        <Image src={companyIcon} alt={`Icon of ${company}`} height='32' width='32' className={iconClass}/>
                }
                
            </Link>
            <div className={`date mx-4 text-sm opacity-75`}>{date}</div>
        </li>
        )


    return (
        <section className="timeline-section relative h-full" id='timeline'>
          <h2>Career timeline</h2>
          <p className='opacity-60 mt-2'>From a SaaS start-up and Insur-tech scale-up, to public service consultancy.</p>
          <ul className="timeline h-full w-full relative mt-12 py-8">
            {
                generateCard(
                    'March 2022', 
                    'Aspenify', 
                    'Junior Developer', 
                    'Developed product demos and improved accessibility and UX of the core site.',
                    false,
                    '',
                    ['js', 'react', 'expressjs', 'mongodb', 'nodejs'],
                    aspenifyImage,
                    'p-0.25 mr-[2px]',
                    'https://aspenify.com/'
                )
            }
            {
                generateCard(
                    'Feb 2023', 
                    'Durell Software', 
                    'Junior Developer', 
                    'Built the foundation of a modern policy admin system, implemented third-party integrations, and worked across core AWS infrastructure, including VPNs, EC2 and RDS.',
                    true,
                    'mt-12',
                    ['net', 'c#', 'js', 'mysql', 'aws'],
                    durellImage,
                    '',
                    'https://www.durell.co.uk/'
                )
            }
            {
                generateCard(
                    'April 2024', 
                    'Durell Software', 
                    'Software Developer', 
                    'Led a team of three developing a modern policy admin system and managed AWS infrastructure after becoming a certified AWS Solutions Architect.',
                    false,
                    'mt-12',
                    ['net', 'c#', 'js', 'mysql', 'aws'],
                    durellImage,
                    '',
                    'https://www.durell.co.uk/'
                )
            }
            {
                generateCard(
                    'Feb 2026', 
                    'Made Tech', 
                    'Software Engineer', 
                    'Joining new company.',
                    true,
                    'mt-12',
                    [],
                    madetechImage,
                    '',
                    'https://www.madetech.com/'
                )
            }
          </ul>
        </section>
    )
}