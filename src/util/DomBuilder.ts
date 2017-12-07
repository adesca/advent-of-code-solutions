import { DomFinder } from "./DomFinder";

export class DomBuilder {
    public static createElement(tagName: string, innerText?: string, attributes?: any): Element {
        let el = document.createElement(tagName);

        if (innerText) {
            el.innerText = innerText;
        }

        for(const prop in attributes) {
            el[prop] = attributes[prop];
        }

        return el;
    }

    static addListener(selector: string|Element, eventType: string, eventHandler: () => void|Function): void {
        let el: Element;
        if(selector instanceof Element)
            el = selector;
        else
            el =  DomFinder.getElement(selector);
        el.addEventListener(eventType, eventHandler);
    }

    static removeListener(selector: string, eventType: string, eventHandler: () => void): void {
        const el = DomFinder.getElement(selector);
        el.removeEventListener(eventType, eventHandler);
    }


}