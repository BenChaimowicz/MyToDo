class Todo {
    private _id: number;
    private _mission: string;
    private _dateCreated: Date;
    
    constructor() {
        dialog.showModal();
        confirmBtn.onclick = () => { this.setMission() };
        cancelBtn.onclick = () => { dialog.close(); };
    }

    public get ID(): number{
        return this._id;
    }
    public setMission() {
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
        this._id = IDCounter;
        this._dateCreated = new Date();
        TDlist.addToDo(this);
        IDCounter++;

    }

    public getMission(): string{
        return this._mission;
    }

    public getDate(): string{
        return (this._dateCreated.toDateString()+ ' - ' + this._dateCreated.toLocaleTimeString());
    }
}