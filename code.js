function agregarProductos(){
    var productos = document.getElementById("productos");
    console.log(productos);
}


const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: 'https://wa.me/+573164101757',
    width: 100,
    height: 100,
    colorDark : '#000',
    colorLight : '#fff',
    correctLevel : QRCode.CorrectLevel.H
  });