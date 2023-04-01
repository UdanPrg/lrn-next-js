import {useState} from "react";

function Header({ title }) {
    return (
        <h1>{title ? title : 'This is a default Title'}</h1>
    )
}

function Button({ text }) {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        console.log("Increment " + text);
        setLikes(likes + 1);
    }
    return (
        <button onClick={handleClick} key={text}>{text} {likes}.</button>
    )
}

export default function HomePage() {

    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="React 💙" />
            <Header title="A new Title ✍🏻" />
            <ul>
                {
                    names.map((name) => (
                        <li key={name}>
                            {name}
                        </li>
                    ))
                }
            </ul>
            <Button text="Likes 👍🏽" />
            <Button text="Hearts ❣️" />
        </div>
    )
}
