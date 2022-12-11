import { useState, useEffect } from 'react';

export default function Popup(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [bounce, setBounce] = useState(null);
    const onClick = (e) => {
        setIsOpen(current => !current);
    }
    console.log(isOpen);
    useEffect(() => {
        !isOpen ? setBounce("animate-pulse duration-300 delay-300") : setBounce(null);
    }, [isOpen])

    //If its open can we disable spline buttons??
    return (
        <div>
            {isOpen &&
                <div className="absolute bottom-16 right-16 rounded-lg w-60 h-80 bg-white opacity-60 p-2">
                    <h1 className="m-2 font-bold">Contact me</h1>
                    <div className="flex flex-col">

                        <a className="m-2">LinkedIn</a>
                        <a className="m-2">GitHub</a>
                        <a className="m-2">Resume</a>
                        <input placeholder="Send me a text!" className="border text-sm p-2 m-2 rounded-md"></input>
                        <button className="border p-1 bg-indigo-600 w-20 text-sm rounded-md text-white font-bold m-2">Send</button>
                    </div>
                </div>
            }

            <div className={`absolute bottom-8 right-8 w-20 h-20 ${bounce} delay-300 duration-300 rounded-full bg-white `} onClick={onClick}>


            </div >
        </div>
    )

}