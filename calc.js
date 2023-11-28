function displayValue(e){
    result.value+=e
}

function out(){
    result.value=eval(result.value)
}

function ac(){
    result.value=""
}

function del(){
    result.value=result.value.slice(0,-1)
}