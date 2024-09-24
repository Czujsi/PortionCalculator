export function calculate(props: number[], multiplier: number): number[] {
    if(multiplier <= 0) {
        throw new RangeError("Range of multiplier can't be lower than 0")
    }
    if(typeof multiplier === 'string'){
        throw new TypeError("Wrong argument type");
    }
    return props.map(value => value * multiplier);
}