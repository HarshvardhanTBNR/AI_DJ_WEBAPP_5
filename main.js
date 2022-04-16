song1="";
song2="";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload(){
song1=loadSound("mighty morphin power rangers.mp3");
song2=loadSound("harry-potter-theme-song.mp3");
}

function setup(){
canvas=createCanvas(500,400);
canvas.position(400,180);
video=createCapture(VIDEO);
video.hide();
}
    
function draw(){
image(video,0,0,500,400);
fill("#FF000");
stroke("FF000");

if(scoreleftWristY>0.2){
song2.stop();
circle(leftWristX,leftWristY,20);
InNumberleftWristY=Number(leftWristY);
remove_decimals=floor(InNumberleftWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="Volume = "+volume;
song.setVolume(volume);
song1play=song1.isPlaying();
document.getElementById("song").innerHTML="Song = MMPR Theme song";
}   

if(scorerightWristY>0.2){
song1.stop();
circle(rightWristX,rightWristY,20);
InNumberrightWristY=Number(rightWristY);
remove_decimals=floor(InNumberrightWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="Volume = "+volume;
song.setVolume(volume);
song2play=song2.isPlaying();
document.getElementById("song").innerHTML="Song = Harry Potter Theme song";
}
}

function gotPoses(results){
if(results.length>0){
console.log(results);
scoreleftWristY=results[0].poses.keypoints[9].score;
scorerightWristY=results[0].poses.keypoints[10].score;
console.log("RightWristY Score = "+scorerightWristY);
}
    
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
    
console.log("Left wrist X = "+leftWristX);
console.log("Left wrist Y = "+leftWristY);
    
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
    
console.log("Right wirst X = "+rightWristX);
console.log("Right wrist Y = "+rightWristY);
    
}