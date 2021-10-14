left_eyepatchX=0;
left_eyepatchY=0;
right_eyepatchX=0;
right_eyepatchY=0;

function setup(){
    canvas=createCanvas(300,275);
    canvas.center();
    video=createCapture(VIDEO);
    video.set(300,275);
    video.hide();

    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,275);
}

function take_snapshot(){
    save('myFilterimage.png');
}

function model_loaded(){
console.log("model has been loaded");
}

function gotPoses(results){

if (results.length > 0){
    console.log(results);
    console.log("left_eye X is = "+ results[0].pose.leftEye.x);
    console.log("left_eye Y is = "+ results[0].pose.leftEye.y);
    console.log("right_eye X is = "+ results[0].pose.rightEye.x);
    console.log("right_eye Y is = "+ results[0].pose.rightEye.y);
   
}
}