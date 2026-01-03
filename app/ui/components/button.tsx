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
      ? "bg-accent hover:bg-accent/75"
      : "bg-primary border-accenttwo border-solid border-2 hover:bg-accenttwo/90";

  const allClasses = `rounded-md px-s py-2xs text-sm font-semibold hover:cursor-pointer ${variantClasses} ${classes}`;

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
