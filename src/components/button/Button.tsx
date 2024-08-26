import Link from "next/link";

interface ButtonProps {
    btnText: React.ReactNode
    href: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({ btnText, href, width }) => {
    return (
        <Link
            href={href}
        >
            <button
                style={{ width: width || 'auto' }}
                className="inline-block bg-primary hover:bg-[#002C1C] sm:w-auto py-3 px-4 rounded-lg text-white font-medium">
                {btnText}
            </button>
        </Link>
    );
};

export default Button;
