import React from 'react'
import type { IconsiedBgCardProps } from '../types'
const IconsisedBgCard = ({
    id,
    title,
    icon,
   
}: IconsiedBgCardProps) => {
    return (
        <div className="collabe-card" key={id}>
            <div className="collab-ico">
                {icon}
                <h3 className="collabe-title fz-18 fw-500">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default IconsisedBgCard