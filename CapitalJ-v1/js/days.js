const days = document.querySelector("#days");

function getdays(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate());
    days.innerText = `${year}/${month}/${day}`;
}

getdays();
setInterval(getdays, 1000);