import { useState } from 'react';
import './Dropdown.css';
import DropdownList from './DropdownList';

export default function Dropdown({ options, preSelectedOption }) {
    const [view, setView] = useState('close');

    function dropdownClick() {
        setView(prevState => prevState === 'open' ? 'close' : 'open');
    }

    return (
        <div className={`dropdown-wrapper ${view}`}>
            <button className="button" onClick={dropdownClick}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <DropdownList items={options} preSelectedOption={preSelectedOption} />
        </div>
    );
}