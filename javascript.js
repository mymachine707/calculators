let btrArray=document.getElementsByClassName("btr");

function initBtr() {
    for (i=0; i<btrArray.length; i++ ) {
        btrArray[i].addEventListener('click',btrFunc);
    }
}

result=document.getElementById("result");

let btrFunc = function(event) {
    switch (event.target.value) {
        case "+" : 
        case "-" : 
        case "*" : 
        case "/" :
        case "." :
            if (result.value[result.value.length-1]!=event.target.value) {
                result.value=result.value+event.target.value;
            } 
            break;
        case "<":
            result.value=result.value.slice(0,-1);
            break;
        case "c" :
            result.value="";
            break;
        case "=" :
            Calc();
        break;
        default: 
            result.value = result.value+event.target.value;

    }

}

initBtr();

function Calc() {
    try {
        result.value = eval(result.value);
    }
    catch(err) {
            if (err instanceof SyntaxError) {
                alert(err.message);    
            }
        }
    
}