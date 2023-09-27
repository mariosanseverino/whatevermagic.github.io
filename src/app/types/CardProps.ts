import { CardInfo } from "./CardInfo";

export interface CardProps {
    flip: boolean,
    setFlip: React.Dispatch<React.SetStateAction<boolean>>,
    cardName: CardInfo['name'],
}
