import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faNotes, faUser, faCalendar, faCog, faLock, faStickyNote} from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'
import { Link } from "react-router-dom";
const Sidebar = () => {

    return <aside className="sidebar">
        <ul>
            <li><Link to='/biljeske'>
                <FontAwesomeIcon
                icon={faStickyNote}
                size={"lg"}/>
                <span>Bilješke</span>
            </Link></li>
            <li><Link to='#'>
            <FontAwesomeIcon
                icon={faUser}
                size={"lg"}/>
                <span>Profil</span>
            </Link></li>
            <li>
                <Link to='/kalendar'>
                    <FontAwesomeIcon
                    icon={faCalendar}
                    size={"lg"}/>
                    <span>Kalendar</span>
                </Link>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon
                icon={faCog}
                size={"lg"}/>
                <span>Opcije</span>
                </a>
            </li>
            <li>
                <Link to='/'>
                    <FontAwesomeIcon
                    icon={faLock}
                    size={"lg"}/>
                    <span>Odjava</span>
                </Link>
            </li>
        </ul>
    </aside>
}

export default Sidebar