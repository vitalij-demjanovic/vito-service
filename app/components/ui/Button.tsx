import cn from "classnames";
interface IButton {
    children: React.ReactNode
    appearance: "primary" | "secondary"
}

const primary = "bg-primary font-bold py-2 px-20 rounded-[15px]";
const secondary = "bg-secondary font-bold py-2 px-20 rounded-[15px]";
export default function Button({appearance, children}: IButton) {
    return (
        <button className={cn({
            [primary] : appearance == 'primary',
            [secondary] : appearance == 'secondary',
        })}>
            {children}
        </button>
    );
}