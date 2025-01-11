// Zwracamy który button powinen być aktywny przy danym kroku
export function radioButtoSet(array: number[], num: number): number {
    const arrayRevers = array.reverse();
    for (let i = 0; i < arrayRevers.length; i++) {

        if (arrayRevers[i] <= num) {
            const temp1 = arrayRevers[i];
            return arrayRevers.reverse().indexOf(temp1);
        }
    }

    return 0;
}

//Zwracamy kierunek oraz ilość kroków
export function countDirection(offset: number): number {
    const direction = offset < 0 ? 1 : -1;
    const steps = Math.floor(Math.abs(offset) / 130);

    return steps * direction;
}