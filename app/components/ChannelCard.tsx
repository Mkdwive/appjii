import Image from 'next/image'
import type { ChannelCardProps } from '../types'
const ChannelCard = ({
    id,
    alt,
    aosDelay,
    height,
    image,
    title,
    width
}: ChannelCardProps) => {
    return (
        <div className="channel-card-item" data-aos="fade-up" data-aos-delay={aosDelay} key={id}>
            <div className="channel-icon-box">
                <Image src={`${image}`} alt={`${alt}`} width={width}
                    height={height}
                    style={{ height: 'auto' }}
                /></div>
            <span className="fz-16 fw-500">{title}</span>
        </div>
    )
}

export default ChannelCard