import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {

  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0";
  const variantClasses = {
    primary:
      "bg-[#ff6f20] hover:bg-[#e65f1a] text-white focus:ring-[#ff6f20]",
    secondary:
      "bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500",
    outline:
      "border border-[#ff6f20] text-[#ff6f20] hover:bg-[#ff6f20]/10 focus:ring-[#ff6f20]",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-7 py-3",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:shadow-lg hover:scale-105";

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabledClasses}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;