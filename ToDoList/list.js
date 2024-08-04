document.addEventListener('DOMContentLoaded', function(){

    const btn = document.getElementsByClassName("addTask");
    let task = document.getElementsByClassName("screen");
    
    btn.addEventListener('click' , function() {
        console.log(task);
    }); 
        
});



