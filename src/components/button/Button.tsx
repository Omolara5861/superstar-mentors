import Link from "next/link";

interface ButtonProps {
    btnText: React.ReactNode
    href: string;
    width?: string;
    classnames?: string
}

const Button: React.FC<ButtonProps> = ({ btnText, href, width, classnames }) => {
    return (
        <Link
            href={href}
        >
            <button
                style={{ width: width || 'auto' }}
                className={`inline-block bg-primary !w-auto py-3 px-4 rounded-lg text-white font-medium ${classnames}`}>
                {btnText}
            </button>
        </Link>
    );
};

export default Button;
