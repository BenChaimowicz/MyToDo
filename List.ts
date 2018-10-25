class TDlist {
    public static todos: Todo[] = [];
    public static selectedItem: Todo;

    constructor() {

    }

    public static removeToDo() {
        let item: Todo = this.selectedItem;
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].ID == item.ID) {
                this.todos.splice(i, 1);
            }
            this.RemoveFromDB(item);
            this.selectedItem = undefined;
        }
        this.refreshList();
    }

    public static addToDo(item: Todo) {
        this.todos.push(item);
        this.refreshList();
        this.AddToDB(item);
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
            li.onclick = () => { this.selectedItem = TDlist.todos[i]; }
            li.onmouseleave = () => { li.innerHTML = TDlist.todos[i].getMission(); };
        }
    }

    private static AddToDB(item: Todo) {
        let iID: number = item.ID;
        let iMission: string = item.getMission();
        let iDate: string = item.getDate();
        TDdatabase.ref('TDList/' + item.ID).set({
            _id: iID,
            _mission: iMission,
            _dateCreated:iDate
        });
        console.log('updated ' + item.ID + ' with: ' + JSON.stringify(item) + 'in Database.');
    }
    private static RemoveFromDB(item?: Todo) {
        TDdatabase.ref('TDList/' + item.ID).remove();
        console.log('deleted ' + item.ID + ' from database.');
    }

    public static FindFreeID(): number {
        if (TDlist.todos.length == 0) {
            return 0;
        }

        let arr: number[] = TDlist.getIDArray();

        for (var i = 0; i < TDlist.todos.length; i++) {
            if (arr.indexOf(i) == -1) {
                return i;
            }
        }
        return i;
    }

    private static getIDArray(): number[]{
        let idArray: number[] = [];
        for (let i = 0; i < TDlist.todos.length; i++){
            idArray.push(TDlist.todos[i].ID);
        }
        return idArray;
    }

    public static updateDB() {
        listRef.once('value').then(TDlist.getDataFromDB, TDlist.noDataInDB);
    }

    private static getDataFromDB(data) {
        data.forEach(function (childData) {
            let cData = childData.val();
            console.log(cData._id + cData._mission + cData._dateCreated);
            let dbToDo: Todo = new Todo(cData._id, cData._mission, cData._dateCreated);
            console.log(dbToDo);
            TDlist.todos.push(dbToDo);
            console.log(childData.val());
        });
        TDlist.refreshList();
    }
    private static noDataInDB(err) {
        console.log(err);
    }
    
}