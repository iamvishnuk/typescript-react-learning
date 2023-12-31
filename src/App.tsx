import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { useState } from "react";
import { LoggedIn } from "./components/state/LoggedIn";
// import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";

function App() {
    const [value, setValue] = useState("");
    const personName = {
        first: "Hello",
        last: "World",
    };

    const nameList = [
        {
            first: "Bruce",
            last: "Wayne",
        },
        {
            first: "Clark",
            last: "Kent",
        },
        {
            first: "Princess",
            last: "Diana",
        },
    ];
    return (
        <>
            {/* props and types */}
            <h1>Hello </h1>
            <Person name={personName} />
            <PersonList name={nameList} />
            <Status status="success" />
            <Heading>ksfjksjfk</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicpariol</Heading>
            </Oscar>
            <Greet name={"vishnu"} isLoggedIn={false} />
            <Button
                handleClick={(event, id) => {
                    console.log("Button clicked", event, id);
                }}
            />
            <Input
                value={value}
                hanldeChange={(event) => setValue(event.target.value)}
            />
            <Container
                styles={{ border: "1px solid black", padding: "10px" }}
            />
            {/* hooks and types */}
            <LoggedIn />
            {/* <Counter /> */}
            {/* context */}
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
            <UserContextProvider>
                <User />
            </UserContextProvider>
            {/* useRef */}
            <MutableRef />
            {/* class component */}
            <br></br>
            <Counter message={"the counter value is"} />
            <br />
            {/* components props */}
            <Private isLoggedIn={false} component={Profile} />
            {/* Generic Props*/}
            <List
                items={[
                    {
                        id: 1,
                        first: "Bruce",
                        last: "Wayne",
                    },
                    {
                        id: 2,
                        first: "Clark",
                        last: "Kent",
                    },
                    {
                        id: 3,
                        first: "Princess",
                        last: "Diana",
                    },
                ]}
                onClick={(item) => console.log(item)}
            />
            {/* Restricted Props */}
            <RandomNumber value={10} isNegative />
            {/* Template Literals and Exclude */}
            <Toast position="center" />

            <CustomButton variant="primary">primary button</CustomButton>

            {/* Polymorphic components*/}
            <Text as="h1" size="lg">Heading</Text>
            <Text as="p" size="md">Paragrah</Text>
        </>
    );
}

export default App;
