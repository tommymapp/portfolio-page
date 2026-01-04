import Link from "next/link"

export default function UnderlineLink({ href, ariaLabel, label, isActive} : {
    href: string,
    ariaLabel: string,
    label: string,
    isActive: boolean,
}) {
    return (
        <Link 
            key={href} 
            href={href} 
            className={`${isActive ? 'font-bold text-accent' : ''} relative group`} 
            aria-label={ariaLabel}
            >
                {label}
                <div
                    className={`
                        absolute left-0 bottom-0
                        w-full h-[2px]
                        rounded
                        transform origin-left
                        scale-x-0
                        transition-transform duration-300 ease-out
                        group-hover:scale-x-100
                        ${isActive ? 'bg-accent' : ' bg-secondary-500'}
                    `}
                />
        </Link>
    )
}