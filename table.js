var table = document.getElementById("mytable");
var count = table.rows.length;

function addHtmlTableRow(){

    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = `<input type="text" id="sno${count}" name="sno">`;
    cell2.innerHTML = `<input type="text" id="com${count}" name="company">`;
    cell3.innerHTML = `<input type="text" id="phno${count}" name="phoneno">`;
    cell4.innerHTML = `<input type="text" id="coun${count}" name="country">`;
    cell5.innerHTML = `<input type="text" id="add${count}" name="address">`;
    cell6.innerHTML = '<input type="button" value="SAVE" onclick="savedata(); Delete(this) ">';
    cell7.innerHTML = '<input type="button" value="DELETE" onclick="Delete(this);">';

    table.appendChild(row);
    console.log(cell1.innerHTML = `<input type="text" id="sno${count}" name="sno">`,count)

}

 function savedata(){

        var s1 = document.getElementById(`sno${count}`).value;
        var s2 = document.getElementById(`com${count}`).value;
        var s3 = document.getElementById(`phno${count}`).value;
        var s4 = document.getElementById(`coun${count}`).value;
        var s5 = document.getElementById(`add${count}`).value;

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
    
        cell1.innerHTML = s1;
        cell2.innerHTML = s2;
        cell3.innerHTML = s3;
        cell4.innerHTML = s4;
        cell5.innerHTML = s5;
        cell6.innerHTML = '<input type="button" value="EDIT" onclick="Edit(this); ">';
        cell7.innerHTML = '<input type="button" value="DELETE" onclick="Delete(this);">';

        table.appendChild(row);

}

function Delete(row)
{
    var i=row.parentNode.parentNode.rowIndex;
    console.log("Deleted :",i);

    table.deleteRow(i);

}

function Edit(rows){

    var i=rows.parentNode.parentNode;
    j= i.rowIndex + 1;
    console.log("Update Row no =",j);

    var s1 = i.children[0].innerHTML;
    var s2 = i.children[1].innerHTML;
    var s3 = i.children[2].innerHTML;
    var s4 = i.children[3].innerHTML;
    var s5 = i.children[4].innerHTML;

    console.log( "From Edit:",i);
        
    i.cells[0].innerHTML = `<input type="text" id="sno${j}" value=${s1} >`;
    i.cells[1].innerHTML = `<input type="text" id="com${j}" value=${s2} >`;
    i.cells[2].innerHTML = `<input type="text" id="phno_${j}" value=${s3} >`;
    i.cells[3].innerHTML = `<input type="text" id="coun_${j}" value=${s4} >`;
    i.cells[4].innerHTML = `<input type="text" id="add_${j}" value=${s5} >`;
    i.cells[5].innerHTML = `<input type="button" value="Update" onclick = "Update(this)" >`;
    i.cells[6].innerHTML = `<input type="button" value="Delete" onclick = "table.deleteRow(i); loadData();" >`;

}

function Update(row){

    var i=row.parentNode.parentNode;
    var j = i.rowIndex;
    // console.log(i.children[0] )

    data1 = i.children[0].innerHTML;
    data2 = i.getElementsByTagName("tr");
    
    console.log(data1);


}
