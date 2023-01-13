let forma = document.forms.f1;
forma.chekeds.addEventListener("click", function () {
  if (forma.elements[6].checked === true) {
    forma.SignUp.disabled = false;
    forma.SignUp.style.backgroundColor = "green";
    console.log(forma.SignUp.disabled);
  } else {
    forma.SignUp.style.backgroundColor = "gray";
    forma.SignUp.disabled = true;
    console.log(forma.SignUp.disabled);
  }
});
let cM = document.getElementById("contMain");
let m1 = document.getElementById("secondMain");
f1.SignUp.addEventListener("click", function () {
  cM.style.display = "none";
  m1.style.display = "block";
});

let img = document.getElementById("ImageStat");
let nameUser = document.getElementById("nameUser");
f1.SignUp.addEventListener("click", function () {
  let user = forma.firstName.value;
  let secondName = forma.secondName.value;
  let email = forma.emailInput.value;
  let select = forma.SelecktOpt.value;
  console.log(select);
  console.log(email);
  console.log(secondName);
  console.log(user);
  document
    .querySelector("#box")
    .insertAdjacentHTML("beforeend", `<h2>${user}</h2>`);
  document
    .querySelector("#box")
    .insertAdjacentHTML(
      "beforeend",
      `<h2 style="margin-left:10px">${secondName}</h2>`
    );

  document
    .querySelector("#box2")
    .insertAdjacentHTML("beforeend", `<p>${email}</p>`);

  document
    .querySelector("#box3")
    .insertAdjacentHTML("beforeend", `<p>${select}</p>`);

  if (document.getElementById("man").checked === true) {
    img.style.cssText = "background-image:url(man.png);";
  } else {
    img.style.cssText = "background-image:url(woman.png);";
  }
});

f2.Exit.addEventListener("click", function () {
  cM.style.display = "block";
  m1.style.display = "none";
  f1.firstName.value = "";
  f1.secondName.value = "";
  f1.emailInput.value = "";
  f1.chekeds.checked = false;
  f1.SelecktOpt.value = "Choose...";
});
