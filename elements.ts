const addBtn: HTMLButtonElement = document.querySelector('#addBtn');

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