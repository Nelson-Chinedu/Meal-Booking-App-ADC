// global declaretion
let menuBar = document.getElementById('menuBar');
let navToggle = document.getElementById('navToggle');
let btnDelete = document.querySelectorAll('.btn-delete');
let modModify = document.querySelectorAll('#mod-modify');
let modDelete = document.querySelectorAll('#mod-delete');
let btnCancel = document.querySelectorAll('#btn-cancel');
let addMeal = document.getElementById('adm-meal');

// menu toggle on small/medium screen
navToggle.addEventListener('click', function(){
  menuBar.classList.toggle('active');
});

// Delete button for admin page
for(var i=0; i<btnDelete.length; i++){
  btnDelete[i].addEventListener('click', function(){
    if(confirm('You are about to delete a menu')){
      alert('Menu deleted :)')
    }else{
      return;
    }
  })
};

// Modify button for admin
for(var i=0; i<=modModify.length; i++){
  modModify[i].addEventListener('click', function(){
    if(confirm('You are about to modify a menu')){
      alert('Menu modified');
    }else{
      return;
    }
  })
}

// Delete button for admin
for(var i=0; i<=modDelete.length; i++){
  modDelete[i].addEventListener('click', function(){
    if(confirm('You are about to delete a menu')){
      alert('Menu deleted');
    }else{
      return;
    }
  })
}

//function to handle login
function handleLogin(){
let lgUname = document.getElementById('lg-uname');
let lgPwd = document.getElementById('lg-pwd');
  if(lgUname.value === "" || lgPwd.value ===""){
    alert('Please enter all fields');
    return;
  }else{
    alert('Logged in')
    lgUname.value = ""
    lgPwd.value = ""
  }
};

//function to handle signup
function handleSignUp(){
let snFname = document.getElementById('sn-fname');
let snLname = document.getElementById('sn-lname');
let snEmail = document.getElementById('sn-email');
let snUname = document.getElementById('sn-uname');
let snPwd = document.getElementById('sn-pwd');
  if(snFname.value === "" || snLname.value === "" || snEmail.value === "" || snUname.value === "" || snPwd.value === ""){
    alert('Please enter all fields');
    return;
  }else{
    alert('Account created')
    snFname.value = ""
    snLname.value = ""
    snEmail.value = ""
    snUname.value = ""
    snPwd.value = ""
  }
};

// function to handle Orders
function handleOrder(){
let ordFname = document.getElementById('ord-fname');
let ordLname = document.getElementById('ord-lname');
let ordEmail = document.getElementById('ord-email');
  if(ordFname.value === "" || ordLname.value === "" || ordEmail.value === "" ){
    alert('Please enter all fields');
    return;
  }else{
    alert('Order made')
    ordFname.value = ""
    ordLname.value = ""
    ordEmail.value = ""
  }
};

// to cancel an order
for(let i=0; i<=btnCancel.length; i++){
  btnCancel[i].addEventListener('click', function(){
    let child = document.getElementsByClassName('order-group')[i];
    alert('Order canceled')
    child.style.display = 'none'
  })
};

// function to add meal
function handleMeal(){
  if(addMeal.value === ""){
    alert('Please input is required');
    return;
  }else{
    alert('Meal added')
    addMeal.value = ""
  }
}

// function to add menu
function handleMenu(){
 const mnList = document.getElementById('mn-list');
 const mnDesc = document.getElementById('mn-desc');
 const mnAmount = document.getElementById('mn-amount');

  if(mnList.value === 'default'){
    alert('please choose a menu')
    mnList.focus();
    return;
  }else if(mnDesc.value === "" || mnAmount.value === ""){
    alert('All fields are required')
    return;
  }else{
    alert('Menu added');
    mnDesc.value = '';
    mnAmount.value = ''
  }
};

