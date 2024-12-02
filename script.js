function generateQRcode(){
    const textt=document.getElementById("text").value;
    const QRCodeContainer=document.getElementById("qrcode");
    QRCodeContainer.innerHTML='';
    if(textt.trim()!==0){
        new QRCode(QRCodeContainer,{text:textt,width:150,height:150})
    }
 }