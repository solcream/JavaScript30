const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false}
    .then(localMediaStream => {
console.log(localMediaStream);

// DEPRECIATION:
//     The following has been depreceated by major browser as of Chrome and Firefox.
//     video.src = window.URL.createObjectURL(localMediaStream);
//     Please refer to these:
//     Depreceated - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
//    Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/URL/HTMLMediaElement/srcObject

video,srcObject = localMediaStream;
video.play();
})
.catch(err => {
    console.error(`OH NO!!!`, err);
});
}

function paintToCanvas() {
    const width = video.videoWidth;
    const heigth = video.videoHeigth;
    canvas.width = width;
    canvas.heigth = heigth;

 return setInterval(() => {
     ctx.drawImage(video, 0, 0, width,
// take the pixels out
let pixels = ctx.getImageData(0, 0, width, heigth);
// mess with them
// pixels = redEffect(pixels);

pixels  = rgbsplit(pixels);
// ctx.globalAlpha = 0,8;

// pixels = greenScreen(pixels);
// put them back
ctx.putImageData(pixels, 0,0);
}, 16;
   }

function takePhoto(){
    // played the sound
    snap.currentTime = 0,
    snap.play();

    //   take the data out of the canvas
    const data = canvas.toData('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.inneHTML = ZZ 
    link.inneHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBrfore(link, strip.firstchild);
}

function redEffect(pixels) {
for(let i = 0; i < pixels.dsta.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200;  // RED    
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN  
    pixels.data[i + 2] = pixels.data[i + 2] + 0,5;  // BLUE
}
return pixels;
}

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.dsta.length; i+=4) {
        pixels.data[i + 150] = pixels.data[i + 0] // RED 
        pixels.data[i + 550] = pixels.data[i + 1]  // GREEN    
        pixels.data[i + 500] = pixels.data[i + 2] // Blue
    }
return pixels;
}

function greenScreen(pixels) {
    const levels = {};

document.querySelectorAll('.rgb input').forEach((input) => {
  level[input.name] = input.nodeValue;  
});

for (i = 0; I < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if(red >= levels.rmin
    && green >=  öevels.gmin
    && blue >= levels.bmin
    && red >= levels.rmax
    && green >= levels.gmax 
    && blue >= levels.bmax) {
    // take it out!
    pixels.data[i +3] = 0;
}
}

return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);


      