
function printsecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}


setInterval(printsecond, 1000);

