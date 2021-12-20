import EventForm from "../EventForm/EventForm";
import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faCalendarPlus} from "@fortawesome/free-solid-svg-icons";
import UserForm from "../EventForm/UserForm";
import './CalendarModule.css'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"
import EventInfo from "../EventForm/EventInfo";
import MainWrapper from "../UI/MainWrapper";

const CalendarModule = () => {
    const [events,setEvents] = useState([
        {
            id: 1,
            title: "[ENG] Mate Peric",
            start: new Date(2021,11,12,17,30),
            end: new Date(2021,11,12,19,0),
            class: 'eng',
            student: "Mate Peric",
            placeno: false
        }
    ])

    const [isOpen, setIsOpen] = useState(false)
    const onEventForm = event => setEvents([event, ...events])
    const [eventOpen, setEventOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState()
    const eventClose = () => setEventOpen(false)

    // Calendar stuff
    const locales = {
        "hr": require("date-fns/locale/hr")
      }
      const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek: () => startOfWeek(new Date(), {weekStartsOn: 1}),
        getDay,
        locales
      });
// end of calendar stuff
 const onSelected = e => {
     setSelectedEvent(e)
     setEventOpen(true)
     

     

 }
    
const eventDelete = id => {
    const newEvents = events.filter(event => event.id !== id)
    setEvents(newEvents)
    setEventOpen(false)
}



    return <MainWrapper>

     <div className="calendarModule">
        <Calendar
        onSelectEvent={onSelected} 
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={events}
        style={{height: 500 
                }}  />
        <div className="buttonWrapper">
        <button
            onClick={() => setIsOpen(true)}
            className="primary">
            <FontAwesomeIcon 
                icon={faCalendarPlus}
                size={"lg"}
                style={{padding: '0 .5em'}}/>
                Dodaj Događaj
        </button>
        </div>
                    <div>
        <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <EventForm 
                onEventForm={onEventForm} 
                onClose={() => setIsOpen(false)}/>
        </Modal>
        </div>
        <Modal isOpen={eventOpen} onClose={eventClose}>
        <EventInfo
        onClose={eventClose}
        onDelete={eventDelete}
        selectedEvent={selectedEvent}/>
        </Modal>
        </div>
        </MainWrapper>


        
}
export default CalendarModule