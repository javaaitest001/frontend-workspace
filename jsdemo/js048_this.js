//오출한 객체가 없을 경우에는 기본적으로 Window객체이다.
console.log(this);

let member = {
    name: '홍길동',
    show: function () {
        console.log(this);
    }
}

member.show();

let member2 = {
    name: '홍길동',
    show: () => {
        console.log(this);
    }
}

member2.show();

let member3 = {
    name: '홍길동',
    show() {
        console.log(this);
    }
}

member3.show();

function showThisName() {
    console.log(this);
}

showThisName();

let showThisName2 = () => {
    console.log(this);
}

showThisName2();

let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    console.log(this);
}, false);

btn.addEventListener('click', () => {
    console.log(this);
}, false);

const hong = { name: '홍길동' };
const jung = { name: '정해인' };

//call() : call()메서드는 모든 함수에서 사용할 수 있는 this값을 특정값으로 지정할 수 있다.
console.log('call()=================');

showThisName.call(hong); // {name: '홍길동'}
showThisName.call(jung); // {name: '정해인'}

showThisName2.call(hong); // Window
showThisName2.call(jung); // Window

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
    console.log(this);
}

update(2019, 'IT');
update.call(hong, 2000, '프로그래머'); // {name: '홍길동', birthYear: 2000, job: '프로그래머'}

//apply()
//1. apply는 함수 매개변수를 처리하는 방법을 제외하면 call()과 같다.
//2. call()은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만 apply()은 매개변수를 배열로 받는다.
update.apply(hong, [2000, '프로그래머']);

//bind()
//1. call()과 사용방법은 같으나 실행을 해야한다.
let hongUpdate = update.bind(hong, 2000, '프로그래머');
hongUpdate();

update.bind(jung, 2016, '디자이너')();