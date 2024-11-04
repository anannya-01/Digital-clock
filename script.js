function updateClock(){
    const now= new Date();
    const hour = now.getHours().toString().padStart(2,0);
    const mins = now.getMinutes().toString().padStart(2,0);
    const secs = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hour}:${mins}:${secs}`;
    document.getElementById("clock").textContent= timeString;
}

updateClock();
setInterval(updateClock,1000)