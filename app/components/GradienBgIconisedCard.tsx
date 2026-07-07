import type { GradienBgIconisedCardProps } from '../types'

const GradienBgIconisedCard = ({
    id,
    className,
    delay,
    icon,
    title,
    description
}: GradienBgIconisedCardProps) => {
    return (
        <article className={`use-case-card ${id === 1 ? "card-span-full" : ""} ${className}`} data-aos="zoom-in" data-aos-delay={`${delay}`} data-aos-duration="100" key={id}>
            <div className="use-case-icon-box">
                {
                    icon
                }
            </div>
            <div>
                <h3 className="use-case-card-title fz-18">{title}</h3>
                <p className="use-case-card-desc fz-16">
                    {description}
                </p>
            </div>
        </article>
    )
}

export default GradienBgIconisedCard