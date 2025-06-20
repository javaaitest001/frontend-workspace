const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]


let data = fruits.toString();
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string


console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

//배열의 끝에 요소 추가
fruits[4] = "Kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.push("Melon")); //6
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]


//배열의  끝에 요소를 제거
console.log(fruits.pop()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//배열의 앞에 요소를 추가
console.log(fruits.unshift("Melon")); //6
console.log(fruits); //[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//배열의 앞에 요소를 제거
console.log(fruits.shift()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//특정 위치의 요소 제거(자리는 확보하고 있음)
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]


fruits[3] = "Mango";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//특정 범위의 요소를 가져옴
console.log(fruits.slice(1, 3)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


console.log(fruits.slice(-4, -2)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


console.log(fruits.slice(1)); //[ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//https://woong-jae.com/javascript/220412-sort-implementation
//javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
//Tim Sort는 Insertion sort와 Merge Sort을 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 : https://d2.naver.com/helloworld/0315536

console.log(fruits.sort());

console.log(fruits.sort().reverse());

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length);
console.log(zData);

let arr2 = [1, 3, [[[4, 5]]], [7, 8], [[9, 10], 12]];
console.log(arr2.length); // 5
console.log(arr2); // [1, 3, Array(1), Array(2), Array(2)]
console.log(arr2.flat()); // [1, 3, Array(1), 7, 8, Array(2), 12]
console.log(arr2.flat(1));
console.log(arr2.flat(2)); // [1, 3, Array(2), 7, 8, 9, 10, 12]
console.log(arr2.flat(3)); // [1, 3, 4, 5, 7, 8, 9, 10, 12]