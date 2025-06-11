//약관 동의
// arrow function
document.frm.onsubmit = () => {
    let admin = document.frm.admin;
    if (!admin.checked) {
        alert('약관에 동의해야 합니다.');
        return false;
    }
}

//전체 선택
document.frm.allCheck.onclick = function () {
    // let checkgroup = document.querySelectorAll('.checkgroup');
    //console.log(checkgroup);
    // document.frm.allCheck.onclick = () => {
    // console.log(this);
    // document.frm.subject1.checked = this.checked;
    // document.frm.subject2.checked = this.checked;
    // document.frm.subject3.checked = this.checked;

    // let checkgroup = document.querySelectorAll('.checkgroup');
    // // checkgroup.checked = this.checked;
    // let myThis = this; // this는 전체선택

    // checkgroup.forEach(function (element) {
    //     element.checked = myThis.checked;
    // });

    let myThis = this;
    let checkgroup = document.querySelectorAll('.checkgroup');
    //checkgroup은 NodeList 이므로 map을 사용할 수 없다.
    // Array.from()을 이용해서 NodeList를 Array로 생성한다.
    // let myArray = Array.from(checkgroup);
    // myArray.map((element) => {
    //   return element.checked = myThis.checked;
    // })

    let iArray = [...checkgroup];
    iArray.map((element) => {
        return element.checked = myThis.checked;
    });

}