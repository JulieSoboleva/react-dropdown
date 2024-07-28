import './App.css';
import items from './data/items';
import Dropdown from './components/Dropdown/Dropdown';

export default function App() {
  const preSelectedOption = 'Profile Information';

  return (
    <div className='container'>
      <Dropdown options={items} preSelectedOption={preSelectedOption}/>
    </div>
  );
}
