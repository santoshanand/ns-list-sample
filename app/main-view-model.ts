import {Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';

export interface NoteItem {
    label:string;
}
export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;
    private _items:ObservableArray<NoteItem> = new ObservableArray<NoteItem>();
    constructor() {
        super();

        // Initialize default values.
        let item1:NoteItem = {label:'Item one'};
        let item2:NoteItem = {label:'Item two'};
        let item3:NoteItem = {label:'Item three'};
        let item4:NoteItem = {label:'Item four'};

        this.dataItems.push(item1);
        this.dataItems.push(item2);
        this.dataItems.push(item3);
        this.dataItems.push(item4);
    }
    get dataItems(): ObservableArray<NoteItem> {
        return this._items;
    }
    set dataItems(value:ObservableArray<NoteItem>) {
        this._items = value;
        this.notifyPropertyChange('dataItems', value);
    }

    
}