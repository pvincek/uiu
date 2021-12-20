import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Biljeska = props => {
    const onDelete = () => props.deleteHandler(props.id)

    return <li style={{backgroundColor: props.boja}}>
        {props.tekst} <span className="icon"><FontAwesomeIcon
        icon={faEdit} size={'lg'}/></span>
        <span className="icon"><FontAwesomeIcon onClick={onDelete} icon={faTrash} size={'lg'}/></span> 
    </li>
}
export default Biljeska