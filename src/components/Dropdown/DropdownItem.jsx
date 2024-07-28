import './Dropdown.css';

export default function DropdownItem({ item, itemClick, style }) {
    return (
        <li className='li'>
            <a href='#0' onClick={itemClick} style={style}>{item}</a>
        </li>
    );
}