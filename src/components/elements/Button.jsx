export default function Button (props) {
    function handleclick () {
        alert(`hello ${props.name}`)
    }

    return (
        <div>
            <button className="p-4 bg-green-400 rounded-sm" onClick={handleclick}>{props.text}</button>
        </div>
    )
}