// Adding record in a table
function addRow(){
    var tr=document.createElement('tr');
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    var name=document.getElementById("name").value;
    var num=document.getElementById("num").value;
    var mail=document.getElementById("mail").value;
    var address=document.getElementById("address").value;
    var del=`<input type="button" name="button" value="Delete" id="button" onclick="delRow(this); delLocal(this)">`
    var edit=`<input type="button" name="edit" value="Edit" id="edit" onclick="editRow(this)">`
    var td5=tr.appendChild(document.createElement('td'));
    td1.innerHTML=name;
    td2.innerHTML=num;
    td3.innerHTML=mail;
    td4.innerHTML=address;
    td5.innerHTML=del+'<br> <br>'+edit;
    document.getElementById("tbl").appendChild(tr);
}
// Deleting record from table
function delRow(del)
{
    var row=del.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function editRow(edit)
{
    var row = edit.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var num = row.cells[1].innerHTML;
    var mail = row.cells[2].innerHTML;
    var address = row.cells[3].innerHTML;

    document.getElementById("name").value = name;
    document.getElementById("num").value = num;
    document.getElementById("mail").value = mail;
    document.getElementById("address").value = address;
    document.getElementById("addButton").innerText = 'Update';
            // var row = edit.parentNode.parentNode;
            // var name = row.cells[0];
            // var num = row.cells[1];
            // var mail = row.cells[2];
            // var address = row.cells[3];
        
            
        
            // // Update edit button to save button
            // edit.outerHTML = `<input type="button" name="save" value="Save" id="save" onclick="saveRow(this)">`;

}
// Adding record in a local Storage
function addLocal()
{
    var name=document.getElementById("name").value;
    var num=document.getElementById("num").value;
    var mail=document.getElementById("mail").value;
    var address=document.getElementById("address").value;
    // localStorage.setItem("name",name);
    // localStorage.setItem("num",num);
    // localStorage.setItem("mail",mail);
    // localStorage.setItem("address",address);
    var arr=[name,num,mail,address];
}
// Deleting record in a local Storage
function delLocal(del)
{
    localStorage.removeItem("name");
    localStorage.removeItem("num");
    localStorage.removeItem("mail");
    localStorage.removeItem("address");
}

// form validation
function validate(){
    var name=document.getElementById("name").value;
    var num=document.getElementById("num").value;
    var mail=document.getElementById("mail").value;
    var address=document.getElementById("address").value;
    var nameError=document.getElementById("name-error");
    nameError.textContent='';
    var numberError=document.getElementById("number-error");
    numberError.textContent='';
    var emailError=document.getElementById("email-error");
    emailError.textContent='';
    var addressError=document.getElementById("address-error");
    addressError.textContent='';
    let isvalidate=true;
    if(name==='')
    {
        nameError.textContent="Please enter the name";
        isvalidate=false;
    }
    if(num==='')
    {
        numberError.textContent="Please enter the mobile number";
        isvalidate=false;
    }
    if(mail==='')
    {
        emailError.textContent="Please enter the email id";
        isvalidate=false;
    }
    if(address==='')
    {
        addressError.textContent="Please enter the address";
        isvalidate=false;
    }
    if(!mail.includes("@"))
    {
        emailError.textContent="Please enter valid email id";
        isvalidate=false;
    }
    if(num.length!=10)
    {
        numberError.textContent="Please enter valid mobile number";
        isvalidate=false;
    }
    if(isvalidate==true){
        addRow();
        addLocal();
    }
    else{
        return isvalidate;
    }
}

