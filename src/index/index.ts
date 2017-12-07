import { DomBuilder } from "../util/DomBuilder";
import { DomFinder } from "../util/DomFinder";

const dayRegistry = {};
const nightRegistry = {};
let currentSolutionHandler = () => {};

export class ChangeObject {
    changePuzzle: (day: number, series: 'a' | 'b') => void;
    changeDayButton: HTMLButtonElement;
    changeNightButton: HTMLButtonElement;
}
(<any>window)['mySpace'] = {};
const namespace = (<any>window).mySpace;
namespace.submitSolution = (solution: any) => {
    (<HTMLElement>document.querySelector('#solutionArea')).innerText = 'Solution: ' + solution;
}

(<any>window).mySpace.register = (day: number, solution: Function, nightlySolution: Function): ChangeObject => {
    dayRegistry[day] = solution;
    nightRegistry[day] = nightlySolution;
    const dayButton = <HTMLButtonElement> DomBuilder.createElement('button', day.toString()+'a', {id: 'day'+day.toString()+'a'});
    const nightButton = <HTMLButtonElement> DomBuilder.createElement('button', day.toString()+'b', {id: 'day'+day.toString()+'b'});

    DomFinder.getElement('#adventDays-seriesA').appendChild(dayButton);
    DomFinder.getElement('#adventDays-seriesB').appendChild(nightButton);
    let retVal = new ChangeObject;
    retVal.changePuzzle = changePuzzle;
    retVal.changeDayButton = dayButton;
    retVal.changeNightButton = nightButton;
    return retVal;   
}

const changePuzzle = (day: number, series: 'a' | 'b') => {
    DomBuilder.removeListener('#solve', 'click', currentSolutionHandler);
    if (series === 'a')
        currentSolutionHandler = dayRegistry[day];
    else 
        currentSolutionHandler = nightRegistry[day];
    DomBuilder.addListener('#solve', 'click', currentSolutionHandler);
    DomFinder.getElement('#currentDay').innerText = `Currently solving for Day ${day} - series ${series}`;
}