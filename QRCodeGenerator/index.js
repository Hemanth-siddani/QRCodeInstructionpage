const SearchInput = document.getElementById("SearchInput");
const SearchButton = document.getElementById("SearchButton");
const QRImage = document.getElementById("QRImage");
const BackButton = document.getElementById("BackButton");
BackButton.style.display = "none";
const myQRCode = () => {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Examples`).then((data) => {
          console.log(data);
          QRImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${SearchInput.value}`
          SearchInput.style.display = "none";
          SearchButton.style.display = "none";
          BackButton.style.display = "";
    })
}

SearchButton.addEventListener("click",() => {
    myQRCode();
});