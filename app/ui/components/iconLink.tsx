import Link from "next/link"

export default function IconLink({link, icon : IconComponent, classes = '', ariaLabel} : {
    link: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    classes?: string,
    ariaLabel: string
}) {
    return <Link className='hover:cursor-pointer' href={link}><IconComponent className={`h-m w-m ${classes} hover:text-accent`} aria-label={ariaLabel}/></Link>
}