import { useState } from "react";
import './Dropdown.css';
import DropdownItem from './DropdownItem';

export default function DropdownList({ items, preSelectedOption }) {
    const [selected, setSelected] = useState(preSelectedOption);

    return (
        <ul data-id='dropdown' className='dropdown'>
            {items.map((item, index) => {
                return (
                    <DropdownItem
                        key={`${index}${item}`}
                        item={item}
                        itemClick={() => setSelected(item)}
                        style={{color: item === selected ? '#5380f7' : ''}} 
                    />
                )
            })}
        </ul>
    );
}