import { ChangeObject, ProblemSpace } from "../index/index";
import { DomBuilder } from "../util/DomBuilder";
import * as _ from "lodash"
import { DomFinder } from "../util/DomFinder";

const namespace = ProblemSpace
console.log('day 3');

const solveDailyPuzzle = () => {
    const puzzleInput = namespace.getInput();
    let total = 0;
    const lineTotals = [];

    const lines =<Array<string>> puzzleInput.split('\n');
    console.log(lines.length);

    lines.forEach((val: string, index: number) => {
        const strippedVal = val.replace(/\s\s+/g, ' ');
        const cols = strippedVal.split(' ');
        
        const localMax = _(strippedVal).split(' ').map(_.parseInt).max();
        const localMin = _(strippedVal).split(' ').map(_.parseInt).min();

        console.log(`${localMax} and ${localMin}`)
        if(localMax) 
            lineTotals.push(localMax - localMin);
    })

    total = _.sum(lineTotals);
    console.log(total);
    
    namespace.submitSolution(total);
}

const solveNightlyPuzzle = () => {
    const puzzleInput = namespace.getInput();
    let total = 0;


    namespace.submitSolution(total);
}

const changeObject: ChangeObject = namespace.register(2, solveDailyPuzzle, solveNightlyPuzzle);
const changePuzzleDaily = () => {
    ProblemSpace.changePuzzle(2, 'a');
}
DomBuilder.addListener(changeObject.changeDayButton, 'click', changePuzzleDaily);

const changePuzzleNightly = () => {
    ProblemSpace.changePuzzle(2, 'b');
}
changeObject.changeNightButton.setAttribute('disabled', 'true');
//DomBuilder.addListener(changeObject.changeNightButton, 'click', changePuzzleNightly);
