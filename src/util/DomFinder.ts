export class DomFinder {
    private queryEl: Element;

    constructor(selector: string) {
        this.queryEl = document.querySelector(selector);
    }

    public static getElement(selector: string): HTMLElement {
        return  document.querySelector(selector);
    }

    public static getText(selector: string): string {
      return document.querySelector(selector).getAttribute('text');
    }

    public static getValue(selector: string): string {
        return (<HTMLInputElement>document.querySelector(selector)).value;
      }
}