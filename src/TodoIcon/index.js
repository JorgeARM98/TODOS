import {AiOutlineCheckCircle} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import './TodoIcon.css';


const iconTypes={
    "check":(color)=><AiOutlineCheckCircle className="Icon-svg"fill={color}/>,        
    "delete":(color)=><ImCross className="Icon-svg"fill={color}/>,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };




