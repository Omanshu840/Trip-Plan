import React from 'react'
import { Accordion, Carousel, Offcanvas } from 'react-bootstrap'

const Hotel = (props) => {
  return (
    <div className='hotel'>
            <Offcanvas show={props.show} onHide={props.handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="hotel-canvas-body" style={{color: '#00235B'}}>
                <Carousel>
                    {props.images && props.images.map((image, index) => {
                        return (
                            <Carousel.Item id={index}>
                                <img
                                className="image"
                                src={image}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <div className='hotel-header'>
                    <div className='name'>{props.name}</div>
                    <div style={{color: '#797A7F'}}>{props.roomType}</div>
                    <div style={{color: '#797A7F', marginBottom: '10px'}}>&#x20B9; {props.price}</div>
                    <div className='rooms'>
                        {
                            props.rooms && props.rooms.map((item, index) => {
                                return (
                                    <div className='room'>{item}</div>
                                )
                            })
                        }
                    </div>
                    <div className='timings'>
                        <div className='timing'>
                            <div>Check-in</div>
                            <div style={{color: '#797A7F'}}>{props.checkIn}</div>
                        </div>
                        <div className='timing'>
                            <div>Check-out</div>
                            <div style={{color: '#797A7F'}}>{props.checkOut}</div>
                        </div>
                    </div>
                </div>
                <div className='amenities'>
                    {
                        props.amenities && props.amenities.map((item, index) => {
                            return (
                                <div className='amenity'>{item}</div>
                            )
                        })
                    }
                </div>
                {props.links &&
                    <Accordion style={{marginTop: '20px'}}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Links</Accordion.Header>
                            <Accordion.Body>
                            {props.links.map((link, index) => {
                                return (
                                    <div id={index} className='links mb-2'>
                                        <a href={link.link} target="_blank" rel='noreferrer'>{link.title}</a>
                                    </div>
                                )
                            })}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                }
            </Offcanvas.Body>
            </Offcanvas>
        </div>
  )
}

export default Hotel