function tableSwap() {


    var tableObj = document.getElementById("table-vr");
    var arr = [];
    var colsLength = ""
    var allTRs = tableObj.getElementsByTagName("tr");
    for (var trCounter = 0; trCounter < allTRs.length; trCounter++) {
        var tmpArr = [];
        var allTDsInTR = allTRs[trCounter].getElementsByTagName("td");
        colsLength = allTDsInTR.length
        for (var tdCounter = 0; tdCounter < allTDsInTR.length; tdCounter++) {
            tmpArr.push(allTDsInTR[tdCounter].innerHTML);
        }
        arr.push(tmpArr);
    }

    var newRows = colsLength
    var newCols = arr.length
    var revArry = []

    for (r = 0; r < newRows; r++) {
        var temArr = [newCols]
        for (c = 0; c < newCols; c++) {

            temArr[c] = arr[c][r]

        }
        revArry.push(temArr)
    }

    console.log(revArry.length);

    $(tableObj).empty()
    for (r = 0; r < newRows; r++) {
        row = tableObj.insertRow(r);
        for (c = 0; c < newCols; c++) {
            cell = row.insertCell(c);
            cell.innerHTML = revArry[r][c]
        }
    }

}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}