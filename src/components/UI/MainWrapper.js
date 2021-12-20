import Sidebar from "./Sidebar"
import './MainWrapper.css'
const MainWrapper = props => {
    
    return <div className="main">
        <div className="side">
        <Sidebar/>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
}

export default MainWrapper