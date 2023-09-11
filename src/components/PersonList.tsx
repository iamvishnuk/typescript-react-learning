type personListProps = {
    name: {
        first: string;
        last: string;
    }[];
};

export const PersonList = (props: personListProps) => {
    return (
        <div>
            {props.name.map((name) => (
                <h1>
                    {name.first} {name.last}
                </h1>
            ))}
        </div>
    );
};
