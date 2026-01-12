import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  buttonText: string;
  buttonLink: string;
}

const StyledButton = ({ buttonText, buttonLink }: ButtonProps) => {
  return (
    <Link
      className="text-primary-foreground font-inter-tight flex gap-3 rounded-full border-2 px-5 py-3 font-medium"
      href={buttonLink}
    >
      {/*  Button Text */}
      <span> {buttonText} </span>

      {/*  Adding Arrow SVG */}
      <ArrowRight className="" />
    </Link>
  );
};

export default StyledButton;
