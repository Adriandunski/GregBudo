import {useEffect, useState} from "react";

export default function useCarosuelBreaks(options: any[]) {

    const [optionsCard, setOption] = useState({slides: 1, withOfCard: 370});

    function checkWindowSize() {
        const t = options.filter(value => {
            if (window.innerWidth >= value.width) return {slides: value.slides, withOfCard: value.withOfCard}
        })[0];
        setOption(t);
    }

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize);
        checkWindowSize();

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    }, []);

    return optionsCard;
}