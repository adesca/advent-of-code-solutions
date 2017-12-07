export class LinkedList<T> {
    list: llNode<T>[];
    head: llNode<T>;

    append(item: T) {
        const newNode = new llNode(item);
        if (this.list.length < 1) 
            this.head = newNode;
        this.list.push(new llNode(item));
    }
}

class llNode<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }
}