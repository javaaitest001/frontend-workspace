let myNode = document.querySelector('#p2');

//parentNode 부모
let ptNode = myNode.parentNode;
console.log(ptNode); //<div id="wrap">…</div>
console.log(`${ptNode}`); // [object HTMLDivElement]

//previousSibling
let prevNode = myNode.previousSibling;
console.log(`prevNode=${prevNode}`); // prevNode=[object Text]

prevNode = prevNode.previousSibling;
console.log(prevNode); // <p id="p1">content1</p>
console.log(`prevNode=${prevNode}`); // prevNode=[object HTMLParagraphElement]

//nextSibling
let nextNode = myNode.nextSibling;
console.log(`nextNode=${nextNode}`); // nextNode=[object Text]

nextNode = nextNode.nextSibling;
console.log(nextNode); // <p id="p3">content3</p>
console.log(`nextNode=${nextNode}`); // nextNode=[object HTMLParagraphElement]

//previousElementSibling
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode=${prevEleNode}, ${prevEleNode.innerText}`); // prevEleNode=[object HTMLParagraphElement], content1

//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode=${nextEleNode}, ${nextEleNode.innerText}`); // nextEleNode=[object HTMLParagraphElement], content3

//childNodes
let divNode = document.querySelector('#wrap');
console.log(`divNode=${divNode}`); // divNode=[object HTMLDivElement]

let divChildsNode = divNode.childNodes;
console.log(`divChildsNode=${divChildsNode}`); // divChildsNode=[object NodeList]
console.log(divChildsNode); // NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]

//children
let divChildren = divNode.children;
console.log(`divChildren=${divChildren}`); // divChildren=[object HTMLCollection]
console.log(divChildren); // HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]
console.log(divChildren[0]); // <p id="p1">content1</p>
console.log(divChildren.item(0)); // <p id="p1">content1</p>
console.log(divChildren.namedItem('p1')); // <p id="p1">content1</p>

//firstChild, firstElementChild
let pNode = document.querySelector('#p4');
let aNode = pNode.firstChild;
console.log(aNode); // #text

let imgNode = pNode.firstElementChild;
console.log(imgNode); // <img src="images/gosu.jpg" alt="영화배우 고수"></img>

//객체.getAttribute("속성명"), 객체.setAttribute("속성명", "속성값");
//객체.속성명, 객체.속성명="속성값"

let imgAttriNode = imgNode.getAttribute("src");
console.log(imgAttriNode); // images/gosu.jpg

imgAttriNode = imgNode.src;
console.log(imgAttriNode); // http://127.0.0.1:5500/jsdemo/images/gosu.jpg

imgNode.setAttribute('title', '스타배우');
imgNode.width = 300;
imgNode.height = 300;