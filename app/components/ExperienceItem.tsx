"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface ExperienceItemProps {
    title:string;
    company: string;
    period: string;
    description: string;
}

const ExperienceItem = ({title, company, period, description}: ExperienceItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='experience-item'>
        <div className='experienceHeader' onClick={() => setIsOpen(!isOpen)}>
            <div className='experience-details'>
            <span>{period}</span>
            <h3>{title}</h3>
            <p>{company}</p>
        </div>
        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
        </div>
        {isOpen && <p className='experience-description'>{description}</p>}
    </div>
  )
}

export default ExperienceItem