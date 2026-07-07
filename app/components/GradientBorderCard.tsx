import React from 'react'
import type { EcosystemCard } from '../types'
import Image from 'next/image'
const GradientBorderCard = ({
    id,
    title,
    image,
    alt,
    width,
    height,
    cardClass,
    aosDelay,
    aosDuration,
    description,
    features


}: EcosystemCard) => {
    return (
        <article
            key={id}
            className={`ecosystem-card ${cardClass}`}
            data-aos="zoom-in"
            data-aos-delay={aosDelay}
            data-aos-duration={aosDuration}
        >
            <div className="powerful-card-content">
                <div className="eco-card-header">
                    <div className="eco-icon-container">
                        <div className="power-icon-wrap">
                            <Image
                                className="img-fluid"
                                src={image}
                                alt={alt}
                                width={width}
                                height={height}
                                style={{ height: "auto" }}
                            />
                            <h3 className="eco-card-title fz-20">{title}</h3>
                        </div>
                    </div>
                </div>

                <p className="eco-card-desc fz-16">
                    {description}
                </p>

                <ul className="eco-checklist checklist fz-14">
                    {features.map((feature, index) => (
                        <li key={index} className="eco-check-item">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default GradientBorderCard