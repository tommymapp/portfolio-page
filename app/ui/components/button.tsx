import Link from "next/link";

type ButtonProps = {
  text: string;
  ariaLabel: string;
  classes?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  link?: string;
  htmlType?: "button" | "submit" | "reset";
};

export default function Button({
  text,
  ariaLabel,
  classes = "",
  onClick,
  variant = "primary",
  link = "",
  htmlType = "button",
}: ButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-accent hover:bg-accent/75 border-primary-500/0"
      : "bg-primary border-accenttwo hover:bg-accenttwo/90";

  const allClasses = `rounded-md px-6 py-3 text-sm duration-100 font-semibold hover:cursor-pointer border-solid border-2 ${variantClasses} ${classes}`;

  if (link) {
    return (
      <Link href={link} className={allClasses} aria-label={ariaLabel}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={allClasses}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}
