import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'outline-primary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-sans font-bold transition-all duration-300 shadow-md transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-capri-red text-white hover:bg-red-800",
    secondary: "bg-capri-green text-white hover:bg-green-800",
    outline: "border-2 border-white text-white hover:bg-white hover:text-capri-stone",
    gold: "bg-capri-gold text-capri-stone hover:bg-yellow-500",
    "outline-primary": "bg-transparent border-2 border-capri-red text-capri-red hover:bg-capri-red hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;