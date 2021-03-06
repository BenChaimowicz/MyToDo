class Todo {
    private _id: number;
    private _mission: string;
    private _dateCreated: string;

    constructor(id?: number, mission?: string, date?: string) {
        if (id != null || id != undefined) {
            this._dateCreated = date;
            this._mission = mission;
            this._id = id;
        } else {
            dialog.showModal();
            txtInput.value = '';
            confirmBtn.onclick = () => { this.setMission() };
            cancelBtn.onclick = () => { dialog.close(); };
        }
    }

    public get ID(): number {
        return this._id;
    }
    public setMission(override?: boolean) {
        let str: string = txtInput.value;
        const invalidMessage: string = 'Invalid Entry!';

        if (str === "") {
            alert(invalidMessage);
        } else {
            this._mission = str;
            this.createListItem();
        };
    }

    private createListItem() {
        dialog.close();
        this._id = TDlist.FindFreeID();
        this._dateCreated = this.getDate(new Date());
        TDlist.addToDo(this);

    }

    public getMission(): string {
        return this._mission;
    }

    public getDate(date?: Date): string {
        if (date) {
            return (date.toDateString() + ' - ' + date.toLocaleTimeString());
        } else {
            return (this._dateCreated);
        }
    }
}