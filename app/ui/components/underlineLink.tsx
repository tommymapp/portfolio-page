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
            className={`relative group p-4`} 
            aria-label={ariaLabel}
            >
                {label}
                <div
                    className={`
                        w-full h-[2px]
                        rounded
                        transform origin-left
                        scale-x-0
                        transition-transform duration-300 ease-out
                        group-hover:scale-x-100
                        bg-secondary-500
                        ${isActive ? 'scale-x-100' : ''}
                    `}
                />
        </Link>
    )
}