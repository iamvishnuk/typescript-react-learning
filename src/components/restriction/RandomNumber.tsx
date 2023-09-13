type RandomNumberType = {
    value: number;
};

type Postive = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
};

type Negative = RandomNumberType & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
};

type Zero = RandomNumberType & {
    isZero: boolean;
    isPositive?: never;
    isNegative?: never;
};

type RandomNumberProps = Postive | Negative | Zero;

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumberProps) => {
    return (
        <div>
            {value}, {isPositive && "Positve"} {isNegative && "Negative"}{" "}
            {isZero && "Zero"}
        </div>
    );
};
