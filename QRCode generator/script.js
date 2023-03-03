document.addEventListener("DOMContentLoaded", function() {
  var qrCode;

  // Function to generate the QR code
  function generateQRCode() {
    var inputText = document.getElementById("input-text").value;
    if (inputText === "") {
      alert("Please enter some text to generate QR code");
      return;
    }
    var qrCodeDiv = document.getElementById("qr-code");
    qrCodeDiv.innerHTML = "";
    qrCode = new QRCode(qrCodeDiv, {
      text: inputText,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  // Add event listener to the "Generate QR Code" button
  var generateQRCodeBtn = document.getElementById("generate-qrcode-btn");
  generateQRCodeBtn.addEventListener("click", generateQRCode);

  // Add event listener to the "Copy to Clipboard" button
  var copyToClipboardBtn = document.getElementById("copy-to-clipboard-btn");
  copyToClipboardBtn.addEventListener("click", function() {
    var imageUrl = qrCode._el.firstChild.src;
    copyImageToClipboard(imageUrl);
  });

  // Add event listeners to the color buttons
  var colorBlackBtn = document.getElementById("color-black-btn");
  colorBlackBtn.addEventListener("click", function() {
    qrCode._o.colorDark = "#000000";
    qrCode.makeCode();
  });

  var colorRedBtn = document.getElementById("color-red-btn");
  colorRedBtn.addEventListener("click", function() {
    qrCode._o.colorDark = "#ff0000";
    qrCode.makeCode();
  });

  var colorGreenBtn = document.getElementById("color-green-btn");
  colorGreenBtn.addEventListener("click", function() {
    qrCode._o.colorDark = "#00ff00";
    qrCode.makeCode();
  });

  var colorBlueBtn = document.getElementById("color-blue-btn");
  colorBlueBtn.addEventListener("click", function() {
    qrCode._o.colorDark = "#0000ff";
    qrCode.makeCode();
  });
});
