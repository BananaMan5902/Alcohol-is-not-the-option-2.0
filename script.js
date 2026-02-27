let gameDiv = document.getElementById("game");

/* ===== BACK BUTTON ===== */

function backMenu(){
    gameDiv.innerHTML="";
}

/* ================= ENERGY QUEST ================= */

function startEnergyQuest(){

let energy = 10;

function render(){

gameDiv.innerHTML=`
<h2>Energy Quest 🌱</h2>

<p>Energy: ${energy}</p>

<p>Good choices give energy. Mystery potion makes you tired.</p>

<button onclick="eatFruit()">🍎 Eat Fruit</button>
<button onclick="drinkWater()">💧 Drink Water</button>
<button onclick="mysteryPotion()">⚠️ Mystery Potion</button>

<br>
<button onclick="backMenu()">⬅ Back</button>
`;

}

window.eatFruit=function(){
energy+=2;
render();
}

window.drinkWater=function(){
energy+=1;
render();
}

window.mysteryPotion=function(){
energy-=3;
alert("The mystery potion makes your character feel slow and tired.");
render();
}

render();
}

/* ================= REACTION LAB ================= */

function startReactionLab(){

let score=0;

gameDiv.innerHTML=`
<h2>Reaction Lab 🧠</h2>

<p>Click the circle as fast as you can!</p>

<p id="reactionScore">Score: 0</p>

<div id="reactionTarget" class="reactionBox"></div>

<br>
<button onclick="backMenu()">⬅ Back</button>
`;

let box=document.getElementById("reactionTarget");

function moveBox(){
box.style.left=Math.random()*200+"px";
box.style.top=Math.random()*200+"px";
}

box.onclick=function(){
score++;
document.getElementById("reactionScore").innerText="Score: "+score;
moveBox();
}

moveBox();
}

/* ================= LIFE BUILDER ================= */

function startLifeBuilder(){

let day=1;
let happiness=10;

function render(){

gameDiv.innerHTML=`
<h2>Life Builder 🌟</h2>

<p>Day ${day}</p>
<p>Happiness: ${happiness}</p>

<button onclick="hobby()">📚 Do Hobby</button>
<button onclick="sports()">⚽ Sports</button>
<button onclick="party()">🎉 Party (Avoid Alcohol)</button>

<br>
<button onclick="backMenu()">⬅ Back</button>
`;

}

window.hobby=function(){
happiness+=1;
day++;
render();
}

window.sports=function(){
happiness+=2;
day++;
render();
}

window.party=function(){
happiness-=2;
alert("Choosing alcohol can make goals harder.");
day++;
render();
}

render();
}
