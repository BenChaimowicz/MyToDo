const addBtn: HTMLButtonElement = document.querySelector('#addBtn');
const rmvBtn: HTMLButtonElement = document.querySelector('#rmvBtn');

const dialog: HTMLDialogElement = document.createElement('DIALOG') as HTMLDialogElement;
document.getElementById('pageContainer').appendChild(dialog);
dialog.open = false;

const cancelBtn: HTMLButtonElement = document.createElement('button') as HTMLButtonElement;
dialog.appendChild(cancelBtn);
cancelBtn.setAttribute('type', 'button');
cancelBtn.innerHTML = 'x';

const confirmBtn: HTMLButtonElement = document.createElement('button') as HTMLButtonElement;
dialog.appendChild(confirmBtn);
confirmBtn.setAttribute('type', 'button');
confirmBtn.innerHTML = '+';

const txtInput: HTMLInputElement = document.createElement('input') as HTMLInputElement;
dialog.appendChild(txtInput);
txtInput.setAttribute('type', 'text');
txtInput.setAttribute('autofocus', 'true');

const list: HTMLUListElement = document.querySelector('#TDList');

declare const firebase: typeof import('firebase');
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
