import Link from "next/link";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  title: string;
  path: string;
  variant?: ButtonVariant;
  className?: string;
}

const CommonBtn = ({
  title,
  path,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const variantClasses = {
    primary: "btn btn-primary cta cta-primary bg-white",
    outline: "btn btn-secondary cta-outline",
  };

  return (
    <Link
      href={path}
      className={`${variantClasses[variant]} ${className}`}
    >
      {title}
    </Link>
  );
};

export default CommonBtn;