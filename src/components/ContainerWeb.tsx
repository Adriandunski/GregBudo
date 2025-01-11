import {ReactNode} from "react";

export default function ContainerWeb({children, idStr, className} : {children: ReactNode, idStr: string, className?: string}) {
    return(
        <article id={idStr} className={`3xl:px-60 pt-18 xl:px-24 sm:px-10 px-4 ${className}`}>
            {children}
        </article>
    );
}