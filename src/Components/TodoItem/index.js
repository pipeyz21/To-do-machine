import './TodoItem.css';
import { GoCheck, GoX} from 'react-icons/go';
import './CustomIcon.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <GoCheck className='CustomIcon'/>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.task}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <GoX className='CustomIcon'/>
      </span>
    </li>
  );
}

export { TodoItem };