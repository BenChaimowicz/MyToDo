"use strict";
class TDlist {
    constructor() {
    }
    static removeToDo(item) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].ID == item.ID) {
                this.todos.splice(i, 1);
            }
        }
        this.refreshList();
    }
    static addToDo(item) {
        this.todos.push(item);
        this.refreshList();
    }
    static refreshList() {
        list.innerHTML = '';
        for (let i = 0; i < TDlist.todos.length; i++) {
            let li = document.createElement('li');
            list.appendChild(li);
            li.innerHTML += TDlist.todos[i].getMission();
            li.ondblclick = () => {
                li.innerHTML = TDlist.todos[i].ID.toString() + ') ';
                li.innerHTML += TDlist.todos[i].getDate();
            };
            li.onmouseleave = () => { li.innerHTML = TDlist.todos[i].getMission(); };
        }
    }
}
TDlist.todos = [];
