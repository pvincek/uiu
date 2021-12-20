import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const EventInfo = props => {
    const [isValid, setIsValid] = useState(false)
    
    const [modalText,setModalText] = useState('')
useEffect(() => {
    
    const event = props.selectedEvent
    const onClickDelete = () => props.onDelete(event.id)
    if(  event === undefined) return null;
    setModalText(
        <>
        <h2>{event.title}</h2>
        <h3>{moment(event.start).format('DD.MM.YYYY.')}</h3>
        <h3>{moment(event.start).format('hh:mm')} - {moment(event.end).format('hh:mm')}</h3>
        {event.note ? <p><b>Napomene:</b> {event.note}</p> : null}
        <div>
            <button onClick={props.onClose} className="primary">OK</button>
            <button 
                className="trash"
                onClick={onClickDelete}>
                    <FontAwesomeIcon
                    icon={faTrash}
                    size={"lg"}/>
            </button>
        </div>
        </>
    )


},
[props.selectedEvent])
useEffect(() => setIsValid(true) , [modalText])
if(!isValid) return null;
return modalText

}


export default EventInfo
