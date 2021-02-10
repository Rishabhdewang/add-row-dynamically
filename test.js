var table = document.getElementById("mytable");
var count = table.rows.length;
var x =0;
// var flag = true;

function addHtmlTableRow(){

    x++;
    console.log("x add",x);

    if(x == 1){

    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = table.rows.length
    cell2.innerHTML = `<input type="text" id="com" name="company">`;
    cell3.innerHTML = `<input type="text" id="phno" name="phoneno">`;
    cell4.innerHTML = `<input type="text" id="coun" name="country">`;
    cell5.innerHTML = `<input type="text" id="add" name="address">`;
    cell6.innerHTML = '<input type="button" value="SAVE" onclick="savedata(this); Delete(this) ">';
    cell7.innerHTML = '<input type="button" value="DELETE" onclick="Delete(this);">';

    table.appendChild(row);
    // console.log(cell1.innerHTML = `<input type="text" id="sno${count}" name="sno">`,count)
    }
}

 function savedata(row){

    var i=row.parentNode.parentNode.children;

        // var s1 = document.getElementById(`sno`).value;
        var s2 = document.getElementById(`com`).value;
        var s3 = document.getElementById(`phno`).value;
        var s4 = document.getElementById(`coun`).value;
        var s5 = document.getElementById(`add`).value;

        // if(checkEmptyInput(s1,s2,s3,s4,s5) = false){

            var rowCount = table.rows.length;  
            var row = table.insertRow(rowCount);  
            console.log("Row no =", rowCount,);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
        
            cell1.innerHTML = rowCount;
            cell2.innerHTML = s2;
            cell3.innerHTML = s3;
            cell4.innerHTML = s4;
            cell5.innerHTML = s5;
            cell6.innerHTML = '<input type="button" value="EDIT" onclick="Edit(this); ">';
            cell7.innerHTML = '<input type="button" value="DELETE" onclick="Delete(this);">';

            table.appendChild(row);
            cleardata(i);

            x = 0;
    
        // }

}

function cleardata(row){
    // console.log(row.cells[0].innerHTML)
    row[0].innerHTML = "";
    row[1].innerHTML = "";
    row[2].innerHTML = "";
    row[3].innerHTML = "";
    row[4].innerHTML = "";
}

function Delete(row)
{
    var i=row.parentNode.parentNode.rowIndex;
    // console.log("Deleted :",i);

    table.deleteRow(i);

}

function Edit(rows){

    var i=rows.parentNode.parentNode;
    j= i.rowIndex + 1;
    console.log("Edit Row no =",j);

    var s1 = i.children[0].innerHTML;
    var s2 = i.children[1].innerHTML;
    var s3 = i.children[2].innerHTML;
    var s4 = i.children[3].innerHTML;
    var s5 = i.children[4].innerHTML;

    // console.log( "From Edit:",i);
        
    i.cells[0].innerHTML = `<input type="text" id="sno" value=${s1} >`;
    i.cells[1].innerHTML = `<input type="text" id="com" value=${s2} >`;
    i.cells[2].innerHTML = `<input type="text" id="phno" value=${s3} >`;
    i.cells[3].innerHTML = `<input type="text" id="coun" value=${s4} >`;
    i.cells[4].innerHTML = `<input type="text" id="add" value=${s5} >`;
    i.cells[5].innerHTML = `<input type="button" value="Update" onclick = "Update(this);" >`;
    i.cells[6].innerHTML = `<input type="button" value="Delete" onclick = "table.deleteRow(i);" >`;

}

function Update(row){

    var i=row.parentNode.parentNode;
    var j = i.rowIndex;
    console.log(" Update Row no =",j);

    var s1 = document.getElementById(`sno`).value;
    var s2 = document.getElementById(`com`).value;
    var s3 = document.getElementById(`phno`).value;
    var s4 = document.getElementById(`coun`).value;
    var s5 = document.getElementById(`add`).value;

    // if(checkEmptyInput(s1,s2,s3,s4,s5) == false) {


        // Way1

        i.cells[0].innerHTML = s1 ;
        i.cells[1].innerHTML = s2 ;
        i.cells[2].innerHTML = s3 ;
        i.cells[3].innerHTML = s4 ;
        i.cells[4].innerHTML = s5 ;
        i.cells[5].innerHTML = '<input type="button" value="EDIT" onclick="Edit(this); ">';
        i.cells[6].innerHTML = '<input type="button" value="DELETE" onclick="Delete(this);">';

        // Way2

        // var row = table.insertRow(j);  

        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // var cell3 = row.insertCell(2);
        // var cell4 = row.insertCell(3);
        // var cell5 = row.insertCell(4);
        // var cell6 = row.insertCell(5);
        // var cell7 = row.insertCell(6);

        // cell1.innerHTML = s1;
        // cell2.innerHTML = s2;
        // cell3.innerHTML = s3;
        // cell4.innerHTML = s4;
        // cell5.innerHTML = s5;
        // cell6.innerHTML = '<input type="button" value="EDIT" onclick="Edit(this); ">';
        // cell7.innerHTML = '<input type="button" value="DELETE" onclick="Delete(this);">';

        // table.appendChild(row);

    // }

}

function checkEmptyInput(s1,s2,s3,s4,s5)
{  
    var isEmpty = false;

    if(s1 == ""){
        document.getElementById('sno').setAttribute('style', 'border : 2px solid red');
        // alert("Serial No. Connot Be Empty");
        console.log(document.getElementById("sno"));
        isEmpty = true;
    }
    else if(s2 === ""){
        alert("Company Name Connot Be Empty");
        isEmpty = true;
    }
    else if(s3 === ""){
        alert("Phone No. Connot Be Empty");
        isEmpty = true;
    }
    else if(s4 === ""){
        alert("Country Connot Be Empty");
        isEmpty = true;
    }
    else if(s5 === ""){
        alert("Address Connot Be Empty");
        isEmpty = true;
    }

    console.log(isEmpty);
    return isEmpty;
}
