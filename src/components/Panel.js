import React from 'react'
import { Accordion, Offcanvas } from 'react-bootstrap';

const Panel = (props) => {
    const getTitle = (value) => {
        if(value.link) {
            return <a href={value.link} target="_blank" rel='noreferrer'>{value.title}</a>
        } else {
            return (
                <div>{value.title}</div>
            )
        }
    }

    return (
        <div className='panel'>
            <Offcanvas show={props.show} onHide={props.handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion>
                {props.moreInfo && props.moreInfo.map((item, index) => {
                    return (
                        <Accordion.Item eventKey={`${index}`}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.data && item.data.map((value) => {
                                    const title = getTitle(value)
                                    return (
                                        <div className='mb-2'> 
                                            {title}
                                            <div className='subtitle'>{value.subtitle}</div>
                                        </div>
                                    )
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
              </Accordion>
            </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Panel