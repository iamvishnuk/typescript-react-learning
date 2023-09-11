type personProps = {
    name: {
        first: string;
        last: string;
    };
};

const Person = (personName: personProps) => {
    return (
        <div>
            {personName.name.first} {personName.name.last}
        </div>
    );
};

export default Person;
