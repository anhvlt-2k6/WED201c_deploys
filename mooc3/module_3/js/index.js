function showProperties(element) {
    document.getElementById('message').innerHTML = element.alt;
}

function leaveMouse() {
    document.getElementById('message').innerHTML = 'Hover over an image';
}

function changeToMyAnimeGirls() {
    const img1 = document.getElementById('bacon1');
    const img2 = document.getElementById('bacon2');
    const img3 = document.getElementById('bacon3');

    img1.src = 'https://assets.dearplayers.com/gplay-data/events/new-character-raven-6746826418-1280x720sr.jpg';
    img2.src = 'https://cdn.printerval.com/unsafe/960x960/asset/111049560a1d1c1a0d1a1a141d56161d0c571115191f1d564b4c48404c4e4f4f48415640414c41571e14190c544f4d480054484f4d541e5508191c544f4d480049484848541e401e401e405612081f';
    img3.src = 'https://source.roboflow.com/dlDzIMg9Czdz3fndwTrdudFx8Dg2/2SVryhXo42CgDfNUCKph/original.jpg';
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}

function handleMouseClick(img) {
    var changeName = prompt("Enter a new name for the image:", img.alt);
    if (changeName !== null) {
        img.alt = changeName;
        console.log(`Image alt text changed to: ${img.alt}`);
    }
}