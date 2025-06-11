let pNode = document.querySelector('#wrap');

console.log(`${pNode.nodeType}, ${pNode.nodeName}, ${pNode.nodeValue}`); // 1, P, null

//속성명
let pAttr = pNode.attributes;
console.log(pAttr); // NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr[0]); //id="wrap"
console.log(pAttr.id); //id="wrap"
console.log(pAttr.length); // 2

console.log(`${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`); // 2, id, wrap

let textNode = pNode.firstChild;
console.log(textNode); // "content"

console.log(`${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`); // 3, #text, content

console.log(pNode.innerText); // content
console.log(pNode.textContent); // content

let fname = document.querySelector('#fname');
console.log(fname.value); // 홍길동