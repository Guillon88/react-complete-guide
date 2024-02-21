export default function TabButton(props) {
    function handleClick() {
        console.log('Hello WOrld');
    }

    return (
    <li>
        <button onClick={handleClick}>{props.children}</button>
    </li>
    );
}