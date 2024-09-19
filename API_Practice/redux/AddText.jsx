import React, { useState } from "react";


function AddText() {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');
    let [check, setCheck] = useState(false);

    function handleChange(e) {
        setInputText(e.target.value);

    };

    function handleClick() {
        setCheck(true);
        setDisplayText(inputText);
        setInputText("");

    };

    return (
        <>
            <div>
                <div className="flex justify-center p-[27px] text-2xl "><h1>TO-DO LIST</h1></div>

                <div className="mt-[180px] " >
                    <input type="text" value={inputText} onChange={(e) => handleChange(e)} className="w-[65rem] h-[40px] color-gray border border-b-sky-600" />
                    <button className="border-black   ml-[40px] text-1xl w-[124px] h-[39px] border  border-b-sky-600" onClick={() => handleClick()}>Add</button></div>
                {/* <div className="flex justify-evenly mt-[144px]"> */}
                    <div className="mt-[10rem] "> <input type='text' className="border border-b-sky-600 w-[65rem] h-[40px]" /> 
                    <button type="button" className="border border-b-sky-600 ml-[10px] w-[82px] h-[38px]">Edit</button> <button type="button" className="border border-b-sky-600 w-[82px] h-[38px]">Delete</button></div>
                    
                    <div className="mt-[10px] "> <input type='text' className="border border-b-sky-600 w-[65rem] h-[40px]" /> 
                    <button type="button" className="border border-b-sky-600 ml-[10px] w-[82px] h-[38px]">Edit</button> <button type="button" className="border border-b-sky-600 w-[82px] h-[38px]">Delete</button></div>

                    <div className="mt-[10px] "> <input type='text' className="border border-b-sky-600 w-[65rem] h-[40px]" /> 
                    <button type="button" className="border border-b-sky-600 ml-[10px] w-[82px] h-[38px]">Edit</button> <button type="button" className="border border-b-sky-600 w-[82px] h-[38px]">Delete</button></div>

                    <div>

                        {
                            (check == true) ?
                                (<div>
                                    <p className="">{displayText}</p>
                                    <button type="button">edit</button> <button>delete</button>
                                </div>) :
                                ''
                        }
                    </div>

                </div>
            {/* </div> */}
        </>
    )


}


export default AddText;
