import * as _ from "lodash"
import { LinkedList } from "./linked-list";
import { DomBuilder } from "../util/DomBuilder";
import { DomFinder } from "../util/DomFinder";
import { ChangeObject } from "../index/index";

const namespace = (<any>window).mySpace;

const solveDailyPuzzle = () => {
    const puzzleInput = DomFinder.getValue('input');
    let total = 0;

    let charArray = puzzleInput.split('');
    
    charArray.forEach((val: string, index: number) => {
        const nextIndex = (index + 1) % charArray.length;
        
        if (parseInt(val) === parseInt(charArray[nextIndex])) {
            
            total += parseInt(val);
            console.log(`running total ${index} value ${total}`);
        }
    });

    namespace.submitSolution(total);
}

const solveNightlyPuzzle = () => {
    namespace.submitSolution('hi');
}

const changeObject: ChangeObject = namespace.register(1, solveDailyPuzzle, solveNightlyPuzzle);
const changePuzzleDaily = () => {
    changeObject.changePuzzle(1, 'a');
}
DomBuilder.addListener(changeObject.changeDayButton, 'click', changePuzzleDaily);

const changePuzzleNightly = () => {
    changeObject.changePuzzle(1, 'b');
}
DomBuilder.addListener(changeObject.changeNightButton, 'click', changePuzzleNightly);
