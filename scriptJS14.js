f1.btnMove.addEventListener('click',function () {
    let user=f1.inputElem1.value;
    console.log(user);
    f1.inputElem2.value=user;

})
f1.placeInput.addEventListener('change', function () {
    let t=f1.placeInput.value;
    console.log(t);
    f1.placeInput.placeholder=t;
    f1.placeInput.value='';
})
