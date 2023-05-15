const generationBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qrCode");
const qrInput = document.querySelector("form input");
const qrImage = document.querySelector(".qrCode img");

generationBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    return alert("لطفا یک متن وارد کنید");
  }
  generationBtn.innerHTML = "در حال تولید کیو آرکد";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    generationBtn.innerHTML = "تولید کیوآرکد";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    qrCodeBox.classList.add("hidden");
  }
});
