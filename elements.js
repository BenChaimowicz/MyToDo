"use strict";
const addBtn = document.querySelector('#addBtn');
const rmvBtn = document.querySelector('#rmvBtn');
const dialog = document.createElement('DIALOG');
document.getElementById('pageContainer').appendChild(dialog);
dialog.open = false;
const cancelBtn = document.createElement('button');
dialog.appendChild(cancelBtn);
cancelBtn.setAttribute('type', 'button');
cancelBtn.innerHTML = 'x';
const confirmBtn = document.createElement('button');
dialog.appendChild(confirmBtn);
confirmBtn.setAttribute('type', 'button');
confirmBtn.innerHTML = '+';
const txtInput = document.createElement('input');
dialog.appendChild(txtInput);
txtInput.setAttribute('type', 'text');
txtInput.setAttribute('autofocus', 'true');
const list = document.querySelector('#TDList');
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
const TDdatabase = firebase.database();
const listRef = TDdatabase.ref('TDList/');
//# sourceMappingURL=elements.js.map