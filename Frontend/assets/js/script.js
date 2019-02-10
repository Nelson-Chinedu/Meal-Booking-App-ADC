let menuBar = document.getElementById('menuBar');
let navToggle = document.getElementById('navToggle');

let btnDelete = document.querySelectorAll('.btn-delete');

navToggle.addEventListener('click', function(){
  menuBar.classList.toggle('active');
});

for(var i=0; i<btnDelete.length; i++){
  btnDelete[i].addEventListener('click', function(){
    
    if(confirm('You are about to delete a menu')){
      alert('Menu deleted :)')
    }else{
      return;
    }
  })
}

