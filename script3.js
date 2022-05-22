const inName = document.getElementById("inName").value;
const inCollageName = document.getElementById("inCollageName").value;
const inLocation = document.getElementById("inLocation").value;

const Generate = Document.getElementById("Generate");
Generate.addEventListener("click", priv);

function priv() {
    const inName = document.getElementById("inName").value;
    const inCollageName = document.getElementById("inCollageName").value;
    const inLocation = document.getElementById("inLocation").value;

    const name = document.getElementById("name");
    const collage = document.getElementById("collage");
    const location = document.getElementById("location");

    name.innerHTML = inName;
    collage.innerHTML = inCollageName;
    location.innerHTML = inLocation;


}
function loadImage(event){
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.file[0]);
}