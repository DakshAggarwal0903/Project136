arrayy=[];
statuss="";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    videoo=createCapture(VIDEO);
    videoo.size(640,420);
    videoo.hide();
    det=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statu").innerHTML="Status: Object Detecting";
}
function modelLoaded(){
    console.log("ML5 Is Loaded");
    statuss=true;
}
function startDetec(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        arrayy=results;
    }
}
function draw(){
    image(videoo,0,0,640,420);
    if(statuss!=""){
        det.detect(videoo,startDetec);
    }
}