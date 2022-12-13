function fullNum() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let bbb = document.getElementById("bbb").value;
      
    if(fname != ""){
      fname
    }
    else if (s != "")
        s += ".";
    if(fname.length > 0)
        fname += " ";
    if(lname.length > 0)
        lname += ", ";
    document.getElementById("DL").value = title + fname + lname + s;
}
