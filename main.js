let Tabledata = [];
var table = document.getElementById("mytable");

var i = 0;
// var j = 100;
// var k = 1000;
// var l = 10000;
// var m = 100000;
// var j = 1000000;

// add Row
function addHtmlTableRow(){

    
    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    // table.appendChild(row);

    cell1.innerHTML = `<input type="text" id="sno_${i+1}" name="sno">`;
    cell2.innerHTML = `<input type="text" id="com_${i+1}" name="company">`;
    cell3.innerHTML = `<input type="text" id="phno_${i+1}" name="phoneno">`;
    cell4.innerHTML = `<input type="text" id="coun_${i+1}" name="country">`;
    cell5.innerHTML = `<input type="text" id="add_${i+1}" name="address">`;
    cell6.innerHTML = '<input type="button" value="SAVE" onclick="savedata(); loadData(); ">';

}
    
function savedata(){

    var s1 = document.getElementById(`sno_${i+1}`).value;
    var s2 = document.getElementById(`com_${i+1}`).value;
    var s3 = document.getElementById(`phno_${i+1}`).value;
    var s4 = document.getElementById(`coun_${i+1}`).value;
    var s5 = document.getElementById(`add_${i+1}`).value;

        // location.reload();

    // console.log("these is from saved",s1,s2,s3,s4.s5);
    Tabledata.push({
        SerialNo : s1,
        Company : s2,
        Phoneno : s3,
        Country : s4,
        Address : s5
    });
    // console.log("these is from saved",Tabledata);
    i += 2;
    // j+= 2;
    // k+= 2;
    // l+= 2;
    // m+= 1;
    loadData();

    // Put the object into storage
    // localStorage.setItem('DATA', JSON.stringify(Tabledata)); 
}
 
function loadData(){
    console.log("thes is load")

    var tablebody = document.getElementById("tabledata");
    let dataHTML = "";

    // var unparseddata = localStorage.getItem('DATA');
    // var data = JSON.parse(unparseddata);
     
    // console.log(data)

    var x = document.getElementsByTagName("tr");

    x[1].style.display = "none";
    

    for( let d of Tabledata){
        // console.log(d);
        dataHTML += 

        `<tr id=${Tabledata.indexOf(d)+2}>
            <td>${d.SerialNo}</td>
            <td>${d.Company}</td>
            <td>${d.Phoneno}</td>
            <td>${d.Country}</td>
            <td>${d.Address}</td>
            <td><button onclick="Edit(this)">Edit</button></td>
            <td><button onclick="Delete(this)">Delete</button></td>
        </tr>`
        // console.log(Tabledata.indexOf(d),"loop value", d)
    }
    tablebody.innerHTML = dataHTML;
    
}

function Delete(row)
{
    // console.log(data)

    var i=row.parentNode.parentNode.rowIndex;

    console.log(i);
    table.deleteRow(i);
    
    console.log(Tabledata[i-2])
    Tabledata.splice(i-2,i-1);

}

function Edit(row){

    var i = row.parentNode.parentNode.rowIndex;
    console.log("id of row =",i);

    // var items = document.getElementsByTagName("tr").item;
    var rows = document.getElementById(i);

    var s1 = document.getElementById(i).children[0].innerHTML;
    var s2 = document.getElementById(i).children[1].innerHTML;
    var s3 = document.getElementById(i).children[2].innerHTML;
    var s4 = document.getElementById(i).children[3].innerHTML;
    var s5 = document.getElementById(i).children[4].innerHTML;

    // console.log( "From Edit:",rows);
        
    rows.cells[0].innerHTML = `<input type="text" id="sno_${i}" value=${s1} >`;
    rows.cells[1].innerHTML = `<input type="text" id="com_${i}" value=${s2} >`;
    rows.cells[2].innerHTML = `<input type="text" id="phno_${i}" value=${s3} >`;
    rows.cells[3].innerHTML = `<input type="text" id="coun_${i}" value=${s4} >`;
    rows.cells[4].innerHTML = `<input type="text" id="add_${i}" value=${s5} >`;
    rows.cells[5].innerHTML = `<input type="button" value="Update" onclick = "updatedata(this);" >`;
    rows.cells[6].innerHTML = `<input type="button" value="Delete" onclick = "table.deleteRow(i); loadData();" >`;
}
   


function updatedata(row){

    
    var i = row.parentNode.parentNode.rowIndex;

    var p1 = document.getElementById(`sno_${i}`).value;
    var p2 = document.getElementById(`com_${i}`).value;
    var p3 = document.getElementById(`phno_${i}`).value;
    var p4 = document.getElementById(`coun_${i}`).value;
    var p5 = document.getElementById(`add_${i}`).value;
        
    console.log("this is from update",i);
    
    console.log( "before",Tabledata);

    Tabledata.splice(i-2,i-1);

    Tabledata.push({
        SerialNo : p1,
        Company : p2,
        Phoneno : p3,
        Country : p4,
        Address : p5
    });
    
    console.log( "after",Tabledata);

        loadData();
}


// function checkEmptyInput()
// {
//     var isEmpty = false,
//     var s1 = document.getElementById("s1").value;
//     var s2 = document.getElementById('s2').value;
//     var s3 = document.getElementById('s3').value;
//     var s4 = document.getElementById('s4').value;
//     var s5 = document.getElementById('s5').value;


//     if(s1 === ""){
//         alert("Serial No. Connot Be Empty");
//         isEmpty = true;
//     }
//     else if(s2 === ""){
//         alert("Company Name Connot Be Empty");
//         isEmpty = true;
//     }
//     else if(s3 === ""){
//         alert("Phone No. Connot Be Empty");
//         isEmpty = true;
//     }
//     else if(s4 === ""){
//         alert("Country Connot Be Empty");
//         isEmpty = true;
//     }
//     else if(s5 === ""){
//         alert("Address Connot Be Empty");
//         isEmpty = true;
//     }
//     return isEmpty;
// }