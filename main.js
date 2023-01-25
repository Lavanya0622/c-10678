function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ff9ddrjaf/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResult)

}

var cat=0;
var dog=0;

function gotResult(error , results)
{
    if(error){
        console.error(error)
    
    }
    else{
        console.log(results);
        red=Math.floor(Math.random()*255)+1;
        green=Math.floor(Math.random()*255)+1;
        blue=Math.floor(Math.random()*255)+1;

        document.getElementById("Result_label").innerHTML="I can hear -"+results[0].label;
        document.getElementById("Result_label").innerHTML="detected Dog-"+dog+" detected Cat -"+cat;
        document.getElementById("Result_label").style.color="rgb("+red+","+green+","+blue+")";
       document.getElementById("result_count").style.color="rgb("+red+","+green+","+blue+")";
 

        img=document.getElementById("animal");
        
        
 if(results[0].label=="Meowing"){
 img.src='cat.jpg';

 }

 else if(results[0].label=="Barking"){
    img.src='download.jpg';
  
    }

    else if(results[0].label=="mooing"){
        img.src='cow.jpg'
        }
        else{
            img.src='ear.png';
           
            }

        
    }
}
