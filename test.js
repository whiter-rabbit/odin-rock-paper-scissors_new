console.log("testing");

document.getElementById("timer").innerHTML ="something";
timer

function passingDate () {
    let now = new Date();
    
    let day = now.getDate();
    if (day < 10) {day = "0" + day }
    let month = now.getMonth()+1;
    if (month < 10) {month = "0" + month }
    let year = now.getFullYear();

    let hour = now.getHours();
        if (hour < 10) {hour = "0" + hour };
    let minutes = now.getMinutes();
        if (minutes < 10) {minutes = "0" + minutes }
    let seconds = now.getSeconds();
        if (seconds < 10) {seconds = "0" + seconds }

    document.getElementById("timer").innerHTML = day + "/" + month + "/" + year + " | " + hour + ":" + minutes + ":" + seconds; 

    setTimeout(passingDate, 1000);    

}

passingDate();


