function toggleMenu(objID) {
if (!document.getElementById) return;
var ob = document.getElementById(objID).style;
ob.display = (ob.display == 'block')?'none': 'block';
}

function toggleMenu2(objID) {
if (!document.getElementById) return;
var ob = document.getElementById(objID).style;
ob.display = (ob.display == 'none')?'block': 'none';
}
