import { ReactElement } from 'react'
import '../assets/css/card.scss'

interface CardProps {
    children: ReactElement
}


const Card = ({ children }: CardProps) => {
    return (
        <div className="card-box">
            {children}
        </div>
    )
}

export default Card