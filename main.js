function startClassification()

{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lV5B01IYd/model.json',modelReady
    );
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -  ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";


        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('hearing');


       
        if (results[0].label == "barking") {
            img.src = 'dog.gif';
            img1.src = '';
            img2.src = '';

        } else if (results[1].label == "meowing") {
          img1.src = 'cat.gif';
          img1.src = '';
          img2.src = '';

     
         
        } else {
            img2.src = 'https://st2.depositphotos.com/1320097/8126/v/380/depositphotos_81265712-stock-illustration-ear-icon.jpg?forcejpeg=true';
            img1.src = '';
            img2.src = '';

        }
    }
}