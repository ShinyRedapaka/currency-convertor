const result=document.getElementById("result");
function display(input){
    result.value+=input;
}
function allClear(){
    result.value='';
}
function del(){
    result.value=result.value.toString().slice(0,-1);
}
function cal(){
    let exp=result.value;
    if(exp.includes('%')){
        result.value=calculatePercentage(exp);
    }
    else{
        try{
            result.value=eval(exp);
        }
        catch{
            result.value="Error"
        }
    }
    
}
function calculatePercentage(exp){
    let parts=exp.split('%');
    if(parts.length===2 && parts[1]==='')
    {   
        let base=parseFloat(parts[0]);
        return (base/100).toString();
    }
    else if(parts.length===2){
        let base=parseFloat(parts[0]);
        let ofValue=parseFloat(parts[1]);
        return ((base*ofValue)/100).toString();
    }
    else{
        result.value="Error";
    }
}