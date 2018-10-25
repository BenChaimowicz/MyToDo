// let TODOList: TDlist = new TDlist();

addBtn.onclick = function () { new Todo() };
rmvBtn.onclick = () => { TDlist.removeToDo(); };

TDlist.updateDB();