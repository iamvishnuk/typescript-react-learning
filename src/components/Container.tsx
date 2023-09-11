type ConstainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ConstainerProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    );
};
