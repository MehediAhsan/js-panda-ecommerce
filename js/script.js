// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const allh2 = document.getElementsByTagName('h2');

for(const h2 of allh2){
    h2.style.color = 'lightblue';
}

//৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
document.getElementById('backpack').style.backgroundColor = 'tomato';

//৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
const cards = document.getElementsByClassName('card');

for(const card of cards){
    card.style.borderRadius = '30px';
}

//৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো

function onClick(){
    console.log('button clicked');
}


//৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 


const buttons = document.getElementsByClassName("panda-btn-warning");

for (let button of buttons) {
  button.addEventListener("click", function () {
    button.parentNode.parentNode.parentNode.removeChild(
      button.parentNode.parentNode
    );
  });
}


//৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 


const submit = document.getElementById("submit");
const input = document.getElementById("exampleInputEmail1");
submit.setAttribute("disabled", true);
input.addEventListener("keyup", function (event) {
  let inputText = event.target.value;
  if (
    inputText.includes("@") &&
    inputText.endsWith(".com") &&
    ["yahoo", "gmail", "aol", "outlook"].some(function (address) {
      return inputText.includes(address);
    })
  ) 
  {
    submit.removeAttribute("disabled");
  } 
  else {
    submit.setAttribute("disabled", true);
  }
});


//৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

const cardImg = document.getElementsByClassName("card-img-top",);
for (let img of cardImg) {
  img.addEventListener("mouseenter", function () {
    let father = img.parentElement;
    father.removeChild(img);
    let newImg = document.createElement("img");
    newImg.setAttribute(
      "src",
      "https://cdn.dribbble.com/users/1233499/screenshots/3855329/ecommerce-illustration2-3.gif"
    );
    father.insertBefore(newImg, father.firstChild);
  });
}


//৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 

document.getElementById("subscribe").addEventListener("dblclick", function (event) {
    let randomColor = ["red", "blue", "coral", "green", "black", "yellow", "purple", "magenta", "wheat",];
    event.target.style.backgroundColor = randomColor[Math.round(Math.random() * randomColor.length)];
  });