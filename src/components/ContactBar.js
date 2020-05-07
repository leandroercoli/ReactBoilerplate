import React from 'react';
import MailOutlineOutlined from '@material-ui/icons/MailOutlineOutlined'

function Link({ children, url = "" }) {
    return <a href={url} target="_blank" className="item" >{children}</a>
}

export function ContactBar() {
    return (
        <div className="contact-bar-container">
            <Link url={"mailto:leandroercoli@gmail.com"} >
                <MailOutlineOutlined className="icon" alt="mail" />
            </Link>
            <Link url={"https://www.linkedin.com/in/leandroercoli"} >
                <img src={require('../assets/icons/icon-linkedin.png')} className="icon" alt="linkedin" />
            </Link>
            <Link url={"https://github.com/leandroercoli"} >
                <img src={require('../assets/icons/icon-github.png')} className="icon" alt="github" />
            </Link>
            <Link url={"https://medium.com/@leandroercoli"} >
                <img src={require('../assets/icons/icon-medium.png')} className="icon" alt="medium" />
            </Link>
        </div >
    )
}