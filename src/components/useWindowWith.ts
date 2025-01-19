import {useLayoutEffect, useState} from "react";

export default function useWindowWith(width : number) {
    const [isMore, setIsMore] = useState<boolean>();

    function checkWindowSize() {
        if (window.innerWidth > width) {
            setIsMore(true)
        } else {
            setIsMore(false)
        }
    }


    useLayoutEffect(() => {
        window.addEventListener('resize', checkWindowSize);
        checkWindowSize();

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    }, []);

    return isMore;
}