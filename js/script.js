function search_animal() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('kirp');
   
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "item";
    }
  }
}
function myFunction() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("elem");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show1')) {
        openDropdown.classList.remove('show1');
      }
    }
  }
}
document.getElementById('drop').onclick= function(event) {
}
document.getElementById('drop').onclick= function(event) {
   var target = event.target; // где был клик?
}
document.getElementById('drop').onclick= function(event) {
    var target = event.target; // где был клик?
    if (target.className == 'drop_menu') {
        var s=target.getElementsByClassName('filter_drop');
        closeMenu();
        s[0].style.display='block';
    }
}
function closeMenu(){
    var menu=document.getElementById('drop');
    var subm=document.getElementsByClassName('filter_drop');
    for (var i=0; i<subm.length; i++) {
        subm[i].style.display="none";
    }
}
document.onclick=function(event) {
    var target = event.target; // где был клик?
    console.log(event.target);
    if (target.className!='drop_menu' && target.className!='filter_drop') {
        closeMenu();
    }
}