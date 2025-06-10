let hNode = document.getElementById("selector");
console.log(hNode); // <h1 id="selector" class="choice">선택자</h1>
console.log(typeof hNode); // object

let hClass = document.getElementsByClassName("choice");
console.log(hClass); // HTMLCollection [h1#selector.choice, selector: h1#selector.choice]
console.log(typeof hClass); // object

let pNode = document.getElementsByTagName("p");
console.log(pNode); // HTMLCollection(4) [p, p, p, p]
console.log(pNode.length); // 4

console.log(pNode[0]);
console.log(pNode.item(0));
console.log(pNode[0].innerText);
console.log(pNode[1].innerText);
console.log(pNode[0].textContent);
console.log(pNode[1].textContent);
pNode[0].style.backgroundColor = "blue";

let hId = document.querySelector("#selector");
console.log(hId); // <h1 id="selector" class="choice">선택자</h1>

let hData = document.querySelector(".choice");
console.log(hData); // <h1 id="selector" class="choice">선택자</h1>

let pList = document.querySelector("p");
console.log(pList); // <p style="background-color: blue;">content1</p>

let pList2 = document.querySelectorAll("p");
console.log(pList2); // NodeList(4) [p, p, p, p]