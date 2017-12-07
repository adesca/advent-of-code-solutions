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

export class ProblemSpace {
    static register = (day: number, solution: Function, nightlySolution: Function): ChangeObject => {
        dayRegistry[day] = solution;
        nightRegistry[day] = nightlySolution;
        const dayButton = <HTMLButtonElement> DomBuilder.createElement('button', day.toString()+'a', {id: 'day'+day.toString()+'a'});
        const nightButton = <HTMLButtonElement> DomBuilder.createElement('button', day.toString()+'b', {id: 'day'+day.toString()+'b'});
    
        DomFinder.getElement('#adventDays-seriesA').appendChild(dayButton);
        DomFinder.getElement('#adventDays-seriesB').appendChild(nightButton);
        let retVal = new ChangeObject;
        retVal.changeDayButton = dayButton;
        retVal.changeNightButton = nightButton;
        return retVal;   
    }
    
    static changePuzzle = (day: number, series: 'a' | 'b') => {
        DomBuilder.removeListener('#solve', 'click', currentSolutionHandler);
        if (series === 'a')
            currentSolutionHandler = dayRegistry[day];
        else 
            currentSolutionHandler = nightRegistry[day];
        DomBuilder.addListener('#solve', 'click', currentSolutionHandler);
        DomFinder.getElement('#currentDay').innerText = `Currently solving for Day ${day} - series ${series}`;
    }

    static getInput = () => {
        if (DomFinder.getValue('input')) 
            return DomFinder.getValue('input');
        else if (DomFinder.getValue('textarea'))
            return DomFinder.getValue('textarea');
        else 
            return '';
    }
    
    static submitSolution = (solution: any) => {
        (<HTMLElement>document.querySelector('#solutionArea')).innerText = 'Solution: ' + solution;
    }
}
