class TDlist {
    public static todos: Todo[] = [];

    constructor() {

    }

    public static removeToDo(item: Todo) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].ID == item.ID) {
                this.todos.splice(i, 1);
            }
        }
        this.refreshList();
    }

    public static addToDo(item: Todo) {
        this.todos.push(item);
        this.refreshList();
    }
    private static refreshList() {
        list.innerHTML = '';
        for (let i = 0; i < TDlist.todos.length; i++) {
            let li: HTMLLIElement = document.createElement('li') as HTMLLIElement;
            list.appendChild(li);
            li.innerHTML += TDlist.todos[i].getMission();
            li.ondblclick = () => {
                li.innerHTML = TDlist.todos[i].ID.toString() + ') ';
                li.innerHTML += TDlist.todos[i].getDate();
            }
            li.onmouseleave = () => { li.innerHTML = TDlist.todos[i].getMission(); };
        }
    }
}