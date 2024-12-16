interface Props {
    active?: boolean;
    className?: string;
    color?: string;
}

export default function LeftArrow(props: Props) {
    const [className] = [props.className || ""];
    return (
        <svg
            className={className}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-accent-foreground"
                d="M12.2889 21.2504L20.9043 29.8658C21.1521 30.1136 21.2745 30.4036 21.2714 30.7358C21.2681 31.0681 21.1372 31.3635 20.8789 31.6221C20.6203 31.8635 20.3275 31.9885 20.0006 31.9971C19.6736 32.0057 19.3809 31.8807 19.1222 31.6221L8.55516 21.055C8.39904 20.8989 8.28905 20.7343 8.22516 20.5612C8.16099 20.3882 8.12891 20.2012 8.12891 20.0004C8.12891 19.7996 8.16099 19.6126 8.22516 19.4396C8.28905 19.2665 8.39904 19.1019 8.55516 18.9458L19.1222 8.37875C19.3531 8.14792 19.6389 8.02986 19.9797 8.02458C20.3206 8.01931 20.6203 8.13736 20.8789 8.37875C21.1372 8.63736 21.2664 8.93431 21.2664 9.26958C21.2664 9.60514 21.1372 9.90222 20.8789 10.1608L12.2889 18.7504H31.2506C31.6053 18.7504 31.9022 18.8701 32.1414 19.1096C32.3809 19.3487 32.5006 19.6457 32.5006 20.0004C32.5006 20.3551 32.3809 20.6521 32.1414 20.8912C31.9022 21.1307 31.6053 21.2504 31.2506 21.2504H12.2889Z"
            />
        </svg>
    );
}
