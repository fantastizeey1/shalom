import clsx from "clsx";

interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={clsx(
        "relative flex items-center justify-center gap-2 rounded-full bg-purple-100 px-6 py-3 text-black hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400",
        containerClass
      )}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span className="text-sm font-medium uppercase">{title}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
