  
  var video=document.querySelector('video');
  var canvas=document.querySelector('canvas');
  var snapBtn=document.getElementById('snapbutton');
  var downloadBtn=document.getElementById('downloadbtn');
  var img=document.querySelector('.canvas__mirror');
  var downloadImageHref=document.getElementById('downloadImageHref');
  var context=canvas.getContext('2d');
  var dataUI;
  var w,h,ratio;

var node = document.getElementById("urlForVideo");
node.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        video.src = node.value;
        snapBtn.classList.add("animate-button");
    }
});
  video.addEventListener('loadedmetadata', function() {
    ratio = video.videoWidth/video.videoHeight;
    w = video.videoWidth-100;
    h = parseInt(w/ratio,10);
    canvas.width = w;
    canvas.height = h;
  },false);

snapBtn.addEventListener("click", function(){
    context.fillRect(0,0,w,h);
    context.drawImage(video,0,0,w,h);
    dataUI = canvas.toDataURL("image/jpeg");
    img.src= dataUI;
    downloadImageHref.href = dataUI;
        snapBtn.classList.remove("animate-button");
        downloadBtn.classList.add("animate-button");
});

video.addEventListener('loadeddata', function() {
        snapBtn.classList.remove("dissabled-buttons");
        downloadBtn.classList.remove("dissabled-buttons");

}, false);

downloadBtn.addEventListener("click", function(){

downloadImageHref.click();
setTimeout(function(){ window.location.reload() }, 500);

});





