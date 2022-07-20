import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function CheckBox(props) {

    const onCheckboxChange = () => {
        props.onStatusChange(props.children)
    }

    const onDeleteRow =()  => {
        props.onDelete(props.children,  props.done);
    }
    return (
        <div className='space-x-4 flex'>
            <input
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 "
                type="checkbox"
                checked={props.done}
                onChange={onCheckboxChange}
            />
            <span
                className={'text-xl flex flex-col' + (props.done && 'line-through')}>
                {props.children}
                <MdDeleteForever onClick={onDeleteRow} className='h-6 w-6 text-red-500 ml-20 mt-1' />
                <FiEdit className='h-5 w-5 text-green-500 ml-2 mt-1' />
            </span>
        </div>
    )
}

export default CheckBox;