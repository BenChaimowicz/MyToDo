"use strict";
class Todo {
    constructor() {
        dialog.showModal();
        confirmBtn.onclick = () => { this.setMission(); };
        cancelBtn.onclick = () => { dialog.close(); };
    }
    get ID() {
        return this._id;
    }
    setMission() {
        let str = txtInput.value;
        const invalidMessage = 'Invalid Entry!';
        if (str === "") {
            alert(invalidMessage);
        }
        else {
            this._mission = str;
            this.createListItem();
        }
        ;
    }
    createListItem() {
        dialog.close();
        this._id = IDCounter;
        this._dateCreated = new Date();
        TDlist.addToDo(this);
        IDCounter++;
    }
    getMission() {
        return this._mission;
    }
    getDate() {
        return (this._dateCreated.toDateString() + ' - ' + this._dateCreated.toLocaleTimeString());
    }
}
