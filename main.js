objects=[]

Status=""


function preload(){
img=loadImage("dog_cat.jpg")
}

function setup(){
canvas=createCanvas(600, 400)
canvas.center()
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects"


}




function modelLoaded(){
console.log("model is loaded")
Status="true"
objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
if(error){
    console.log(error)
}
else{
console.log(results)
objects=results
}
}

function draw(){

image(img, 0, 0, 600, 400)
if(Status!=''){
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="status:object detected"
fill("green")
percent=floor(objects[i].confidence*100)+'%'
text(objects[i].label+' '+percent,objects[i].x,objects[i].y)
noFill()
stroke("black")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        
    }
}
}