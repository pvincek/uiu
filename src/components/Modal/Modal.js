import './Modal.css'
import reactDom from 'react-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {animated, useTransition} from 'react-spring'
const Modal = props => {
    const animation = useTransition(props.isOpen, {
        from:{opacity: 0},
        enter:{opacity: 1},
        leave:{opacity: 0},
        reverse: props.isOpen,
        config:{duration: 300}
    })
    useEffect(() => {
        const close = e => e.key === 'Escape' ? props.onClose() : null
        
        window.addEventListener('keydown',close)
        return () => window.removeEventListener('keydown',close)
    }, [])

    if(!props.isOpen) return null;

    return reactDom.createPortal(<> {animation((styles,item) => item && <animated.div style={styles} onClick={props.onClose} className="overlay"/>)}
        
        {animation((styles,item) => item && <animated.div style={styles} className="modalCard">
        <FontAwesomeIcon className="close" icon={faTimesCircle} onClick={props.onClose}/>
            <div className="innerContent">
            {props.children}
            </div>
        </animated.div>)}
        </>

        

    ,document.getElementById('modal'))
        
}

export default Modal