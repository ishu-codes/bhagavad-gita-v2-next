interface Props {
    active?: boolean;
    className?: string;
    color?: string;
}

export default function LanguageIcon(props: Props) {
    const [className] = [props.className || "mx-auto"];
    return (
        <svg
            className={className}
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="stroke-accent-foreground"
                d="M2.83301 16.9997C2.83301 24.8239 9.17542 31.1663 16.9997 31.1663C24.8239 31.1663 31.1663 24.8239 31.1663 16.9997C31.1663 9.17542 24.8239 2.83301 16.9997 2.83301C9.17542 2.83301 2.83301 9.17542 2.83301 16.9997Z"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                className="stroke-accent-foreground"
                d="M18.4164 2.9043C18.4164 2.9043 22.6664 8.50013 22.6664 17.0001C22.6664 25.5001 18.4164 31.096 18.4164 31.096M15.5831 31.096C15.5831 31.096 11.3331 25.5001 11.3331 17.0001C11.3331 8.50013 15.5831 2.9043 15.5831 2.9043M3.72559 21.9585H30.2739M3.72559 12.0418H30.2739"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
