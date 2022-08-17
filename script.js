document.getElementById("tr").addEventListener("click", tr_clicked);

function tr_clicked(){
    //console.log(document.getElementById("tr").checked);

    if(document.getElementById("tr").checked){
    document.getElementById("istanbul").checked = true;
    document.getElementById("ankara").checked = true;
    document.getElementById("izmir").checked = true;
    }
    else{
    document.getElementById("istanbul").checked = false;
    document.getElementById("ankara").checked = false;
    document.getElementById("izmir").checked = false;
    }
}
/* ##################################################### */

document.getElementById("istanbul").addEventListener("click", tr_city_clicked);
document.getElementById("ankara").addEventListener("click", tr_city_clicked);
document.getElementById("izmir").addEventListener("click", tr_city_clicked);

function tr_city_clicked(){
    if(document.getElementById("istanbul").checked
    && document.getElementById("ankara").checked
    && document.getElementById("izmir").checked
    )
    document.getElementById("tr").checked = true;

    if(!document.getElementById("istanbul").checked)
    document.getElementById("tr").checked = false;

    if(!document.getElementById("ankara").checked)
    document.getElementById("tr").checked = false;

    if(!document.getElementById("izmir").checked)
    document.getElementById("tr").checked = false;

}
/* ##################################################### */
