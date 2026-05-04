import { Link } from "react-router-dom";

const Button = ({ 
  children, 
  to, 
  href, 
  variant = "primary", 
  className = "", 
  as: Component = "button", 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "border-2 border-amber-900 bg-amber-900 text-white shadow-sm shadow-amber-900/20 hover:shadow-md hover:shadow-amber-900/30 hover:-translate-y-0.5 focus:ring-amber-900/50",
    secondary: "border-2 border-zinc-300 bg-white text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 focus:ring-zinc-900/50",
    ghost: "border-2 border-transparent bg-transparent text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 focus:ring-zinc-900/50"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to || Component === Link) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;

