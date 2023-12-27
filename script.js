let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let inpText = document.getElementById("inpText");
function generateQR(){
    imgBox.style.display = "flex";
    qrImage.src =" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inpText.value;

}