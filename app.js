let charsLeft = 64;
let i = 0;

// jquery function for menu highlighting
$(document).ready(function(){
    $("td").mouseover(function(){
        $(this).attr('id', 'highlight');
    });
    $("td").mouseout(function(){
        $(this).removeAttr('id');
    });	
});

// event listener for char count in textarea
function eventListener(){
    
    document.querySelector("textarea").addEventListener("keydown", event => {
        const target = event.currentTarget;
        const maxLength = target.getAttribute("maxlength");
        const currentLength = target.value.length;
        const key = event.keyCode;

        charsLeft = maxLength-currentLength;

        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").style.fontWeight = "normal";
      
        if ((key == 8 || key == 46) && charsLeft >= 0){
            document.getElementById("msg").innerHTML = `${charsLeft} of ${maxLength} characters left`;
            charsLeft++;
            return;
        }

        else if (charsLeft > 0 && charsLeft <= 64) {
            document.getElementById("msg").innerHTML = `${--charsLeft} of ${maxLength} characters left`;
        }
        else {
            document.getElementById("msg").style.color = "red";
            document.getElementById("msg").style.fontWeight = "bold";
            document.getElementById("msg").innerHTML = `${charsLeft} of ${maxLength} characters left`;
        }
    });
}

// Date + Time in footer
function getDateTime(){    
    const today = new Date();
    document.getElementById("dateTime").innerHTML = `Today is: ${today}`
}