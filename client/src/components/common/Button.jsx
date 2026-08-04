function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyle =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30",

    secondary:
      "border border-white/20 bg-white/5 hover:bg-white/10 text-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;