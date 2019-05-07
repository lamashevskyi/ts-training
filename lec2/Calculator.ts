import {ICalculator} from "./ICalculator";

export class Calculator implements ICalculator{

    public add(a: number, b: number): number {
        const sum = a + b;
        this.writeToConsole(sum.toString());
        return sum;
    }

    private writeToConsole(text: string): void {
        console.log(text);
    }
}
