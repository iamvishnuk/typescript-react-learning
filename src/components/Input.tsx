type InputProps = {
    value: string;
    hanldeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, hanldeChange }: InputProps) => {
    return <input type="text" onChange={hanldeChange} value={value} />;
};
