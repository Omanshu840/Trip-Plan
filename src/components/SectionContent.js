import React from 'react'
import TimeStamp from './TimeStamp'
import VerticalLine from './VerticalLine'

const SectionContent = (props) => {
  return (
    <div className='section-content'>
        <VerticalLine height={20}/>
        <TimeStamp time={props.time}/>
        <div className='section-card'>
            <div className='title' onClick={props.link ? () => window.open(props.link, "_blank") : ()=>{}}>{props.title}</div>
            {props.imgLink &&
              <img src={props.imgLink} style={{width: '100%'}}alt='img'/>
            }
            {(props.id === "hotel") ? <div onClick={props.openHotelDetails} style={{textDecoration: 'underline'}}>{props.subtitle}</div> : <div className='subtitle'>{props.subtitle}</div>}
            <div className='para'>{props.para1}</div>
            <div className='para'>{props.para2}</div>
            <div className='note'>{props.note}</div>
            {props.price &&
              <div>&#x20B9; {props.price}</div>
            }
        </div>
    </div>
  )
}

export default SectionContent