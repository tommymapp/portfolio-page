import Link from "next/link";

export default function Button({ text, onClick, classes = '', type = 'primary', link = ''}:
    {
        text: string,
        classes?: string,
        onClick?: () => void,
        type?: 'primary' | 'secondary',
        link? : string
    }
) {

  const typeClasses =
    type === "primary"
      ? "bg-accent hover:bg-accent/90 "
      : "bg-primary border-accenttwo border-solid border-2 hover:bg-accenttwo/90";

  const allClasses = `rounded-md px-s py-2xs text-sm font-semibold hover:cursor-pointer ${typeClasses} ${classes}`

  return (
    link != '' ? 
      <Link href={link} className={allClasses}>{text}</Link> 
      : 
      <button type="button" onClick={onClick} className={allClasses}>
        {text}
      </button>
  );
}
