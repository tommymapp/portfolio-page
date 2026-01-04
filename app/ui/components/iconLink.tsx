import Link from "next/link"

export default function IconLink({link, icon : IconComponent, classes = '', ariaLabel} : {
    link: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    classes?: string,
    ariaLabel: string
}) {
    return <Link className='cursor-pointer' href={link}><IconComponent className={`h-8 w-8 ${classes}`} aria-label={ariaLabel}/></Link>
}