import { Greet } from "../Greet";

// extracting a components props types that we don't know
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return <div>{props.name}</div>;
};
