import { ReactNode } from "react"
interface IconizedCardProps {
    id: number,
    icon: ReactNode
    title: string,
    para: string,
}

const IconizedBorderCard = ({ id, icon, title, para }: IconizedCardProps) => {
    return (
        <div className="communication-card" key={id}>
            <div className="comm-ico">
                {icon}
            </div>
            <h3 className="comm-title">{title}</h3>
            <p className="comm-para">
                {para}
            </p>
        </div>
    )
}

export default IconizedBorderCard