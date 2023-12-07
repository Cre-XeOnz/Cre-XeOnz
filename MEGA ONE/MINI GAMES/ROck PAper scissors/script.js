let rand_number = Math.floor(Math.random() *3) +1;
let current_image="back.png";
let initialize;

function random(){
    a= Math.floor(Math.random() *3) +1;;
    console.log(a);
    rand_number=a;
}

function comp_ans(){
    document.getElementById("heading1").innerHTML="No cheating XD";
    document.getElementById("texts").innerHTML="Choose your option.<br>The computer has already chosen!!"
}

function comp_choice(){
    if(rand_number==1)
    {
        current_image="rock.png";
        let image = document.getElementById('img1');
        image.src=current_image;
    }
    if(rand_number==2)
    {
        current_image="paper.png";
        let image = document.getElementById('img1');
        image.src=current_image;
    }
    
    if(rand_number==3)
    {
        current_image="scissors.png";
        let image = document.getElementById('img1');
        image.src=current_image;
    }
}
function reload(){
    let rock_img='rock.png';
    let paper_img='paper.png';
    let scissors_img='scissors.png';
    document.getElementById("heading1").innerHTML = "Rock Paper Scissors";
    document.getElementById("texts").innerHTML = "Computer is Ready!!!!<br>Pick yours as well....";    
    random();
    let image = document.getElementById('img1');
    image.src = current_image;
    let image1 = document.getElementById('rock');
    image1.src = rock_img;
    let image2 = document.getElementById('paper');
    image2.src = paper_img;
    let image3 = document.getElementById('scissors');
    image3.src = scissors_img;
    document.getElementById('result').innerText='';
}
function enableButtons() {
    document.querySelectorAll('.container img').forEach(function (img) {
        img.onclick = function () {
            comp_choice();
            disableButtons();
            eval(img.id + '()');
        }
    });
}

function disableButtons() {
    document.querySelectorAll('.container img').forEach(function (img) {
        img.onclick = null;
    });
}
function rock(){
    current_image='back.png';
    let images = document.getElementById('paper');
    images.src=current_image;
    let image2 = document.getElementById('scissors');
    image2.src=current_image;
    if(rand_number==1){
        document.getElementById('result').innerText="You are Draw!";
    }else if(rand_number==2){
    document.getElementById('result').innerText="You lost!";
     }else{
    document.getElementById('result').innerText="You Won!";
   }
   document.getElementById('texts').innerText='';
}
function rock_choice(){
    comp_choice();
    rock();
}
function paper(){
    current_image='back.png';
    let images = document.getElementById('rock');
    images.src=current_image;
    let image2 = document.getElementById('scissors');
    image2.src=current_image;
    if(rand_number==2){
        document.getElementById('result').innerText="You are Draw!";
    }else if(rand_number==3){
    document.getElementById('result').innerText="You lost!";
     }else{
    document.getElementById('result').innerText="You Won!";
   }
   document.getElementById('texts').innerText='';
}
function paper_choice(){
    comp_choice();
    paper();
}
function scissors(){
    current_image='back.png';
    let images = document.getElementById('paper');
    images.src=current_image;
    let image2 = document.getElementById('rock');
    image2.src=current_image;
    if(rand_number==3){
        document.getElementById('result').innerText="You are Draw!";
    }else if(rand_number==1){
    document.getElementById('result').innerText="You lost!";
     }else{
    document.getElementById('result').innerText="You Won!";
   }
   document.getElementById('texts').innerText='';
}
function scissors_choice(){
    comp_choice();
    scissors();
}