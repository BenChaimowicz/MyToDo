"use strict";
class Todo {
    constructor(id, mission, date) {
        if (id != null || id != undefined) {
            this._dateCreated = date;
            this._mission = mission;
            this._id = id;
        }
        else {
            dialog.showModal();
            txtInput.value = '';
            confirmBtn.onclick = () => { this.setMission(); };
            cancelBtn.onclick = () => { dialog.close(); };
        }
    }
    get ID() {
        return this._id;
    }
    setMission(override) {
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
        this._id = TDlist.FindFreeID();
        this._dateCreated = this.getDate(new Date());
        TDlist.addToDo(this);
    }
    getMission() {
        return this._mission;
    }
    getDate(date) {
        if (date) {
            return (date.toDateString() + ' - ' + date.toLocaleTimeString());
        }
        else {
            return (this._dateCreated);
        }
    }
}
//# sourceMappingURL=todo.js.map