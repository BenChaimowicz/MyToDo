"use strict";
class TDlist {
    constructor() {
    }
    static removeToDo() {
        let item = this.selectedItem;
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].ID == item.ID) {
                this.todos.splice(i, 1);
            }
            this.RemoveFromDB(item);
            this.selectedItem = undefined;
        }
        this.refreshList();
    }
    static addToDo(item) {
        this.todos.push(item);
        this.refreshList();
        this.AddToDB(item);
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
            li.onclick = () => { this.selectedItem = TDlist.todos[i]; };
            li.onmouseleave = () => { li.innerHTML = TDlist.todos[i].getMission(); };
        }
    }
    static AddToDB(item) {
        let iID = item.ID;
        let iMission = item.getMission();
        let iDate = item.getDate();
        TDdatabase.ref('TDList/' + item.ID).set({
            _id: iID,
            _mission: iMission,
            _dateCreated: iDate
        });
        console.log('updated ' + item.ID + ' with: ' + JSON.stringify(item) + 'in Database.');
    }
    static RemoveFromDB(item) {
        TDdatabase.ref('TDList/' + item.ID).remove();
        console.log('deleted ' + item.ID + ' from database.');
    }
    static FindFreeID() {
        if (TDlist.todos.length == 0) {
            return 0;
        }
        let arr = TDlist.getIDArray();
        for (var i = 0; i < TDlist.todos.length; i++) {
            if (arr.indexOf(i) == -1) {
                return i;
            }
        }
        return i;
    }
    static getIDArray() {
        let idArray = [];
        for (let i = 0; i < TDlist.todos.length; i++) {
            idArray.push(TDlist.todos[i].ID);
        }
        return idArray;
    }
    static updateDB() {
        listRef.once('value').then(function (snapShot) {
            snapShot.forEach(function (childSnapShot) {
                let key = childSnapShot.key;
                console.log(key);
                let TDdata = childSnapShot.val();
                console.log(TDdata);
            });
        }, this.noDataInDB);
    }
    static noDataInDB(err) {
        console.log(err);
    }
}
TDlist.todos = [];
//# sourceMappingURL=List.js.map