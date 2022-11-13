export default function Popup(props) {
    const { isOpen } = props;
    const hidden = isOpen ? 'block' : 'hidden';
    return (
        <div className={`absolute mt-40 ml-20 w-60 h-40 rounded-lg bg-white opacity-60 p-4 ${hidden}`}>
            <section className="h-10 text-lg text-gray-400 font-bold">
                <p>{"Press keys"} <br />{" A & D or < & > "} <br />{"to move!"}</p>

            </section>
        </div>
        // <div></div>
    )

}