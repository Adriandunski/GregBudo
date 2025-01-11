import {ReactNode} from "react";

export default function CardCarosuel({widthCard, children}: {widthCard: number, children: ReactNode}) {
    return(
        <div className={''} style={{width: widthCard}}>
            {children}
        </div>
    );
}