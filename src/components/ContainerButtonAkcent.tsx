import {ReactNode} from "react";

export default function ContainerButtonAkcent({children}: {children: ReactNode}) {

    return (
        <div
            className={'inline-block items-center text-white justify-center px-4 py-2 rounded-md font-AdventPro font-medium text-base tracking-wide bg-orangeMain'}>
            {children}
        </div>
    );
}