import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"


const CalendarWrapper = props => {

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

      const onSelected = e => props.onSelected(e)
      
    
    return <div>
        <Calendar
        onSelectEvent={onSelected} 
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={props.events}
        style={{height: 500 
                }}  />
    </div>


}

export default CalendarWrapper