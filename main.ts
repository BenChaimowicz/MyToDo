// Initialize Firebase
var config = {
    apiKey: "AIzaSyB7bYleRvnUrm5FDaLce-TsQxfEbeS_rXc",
    authDomain: "simplesttodo.firebaseapp.com",
    databaseURL: "https://simplesttodo.firebaseio.com",
    projectId: "simplesttodo",
    storageBucket: "simplesttodo.appspot.com",
    messagingSenderId: "285441730860"
};
firebase.initializeApp(config);

let TODOList: TDlist = new TDlist();
let IDCounter: number = 1;

addBtn.onclick = function () { new Todo() };