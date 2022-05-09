let data = [{
    반 : 1,
    번 : 1,
    이름 : "호준",
    중간고사점수 : 55
}, {
    반 : 1,
    번 : 2,
    이름 : "길동",
    중간고사점수 : 60
}, {
    반 : 1,
    번 : 3,
    이름 : "영희",
    중간고사점수 : 30
}, {
    반 : 1,
    번 : 4,
    이름 : "철수",
    중간고사점수 : 20
}, {
    반 : 1,
    번 : 5,
    이름 : "규리",
    중간고사점수 : 100
}]

document.write(`1. 중간고사 점수 array<br><br>`);

// 반복문 대신 array의 method를 활용하면
// data.map(x => x.중간고사점수);
const grade = [];
for(let i = 0; i<data.length; i++){
    grade.push(data[i].중간고사점수);
}
document.write(`- ${grade}<br><br>`);

document.write(`2. 이름과 중간고사 점수 array<br><br>`);

// 반복문 대신 array의 method를 활용하면
// data.map(x => [x.이름, x.중간고사점수]);
const nameGrade = [];
for(let i = 0; i<data.length; i++){
    nameGrade.push([data[i].이름, data[i].중간고사점수]);
}
document.write(`- ${nameGrade}<br><br>`);

// (나아가기) 3. 중간고사점수의 표준편차를 구해주세요. 또 어떻게 구하는 것이 효율적일지 고민해주세요.
document.write(`3. 중간고사 점수 표준편차(노가다로 구하기)<br><br>`);

const gradeArr = data.map(x => x.중간고사점수);

document.write(`(1) 평균 구하기<br><br>`);

const average = gradeArr.reduce((a, b) => a+b, 0) / gradeArr.length;
document.write(`- ${average}<br><br>`);

document.write(`(2) 분산 구하기<br><br>`);

const variance = gradeArr.map(x => (x - average)**2).reduce((a, b) => a+b, 0) / gradeArr.length;
document.write(`- ${variance}<br><br>`);

document.write(`(3) 표준편차 구하기<br><br>`);

const stDev = Math.sqrt(variance);
document.write(`- ${stDev}<br><br>`);

document.write(`4. 중간고사 점수 표준편차(알고리즘)<br><br>`);

document.write(`(1) two-pass algorithm<br><br>`);

let sum1 = 0, sum2 = 0;

for(let i = 0; i<gradeArr.length; i++){
    sum1 += gradeArr[i];
}

for(let i = 0; i<gradeArr.length; i++){
    sum2 += (gradeArr[i] - sum1/gradeArr.length)**2;
}

const stDev2 = Math.sqrt(sum2 / (gradeArr.length - 1));

document.write(`- ${stDev2}<br><br>`);

document.write(`(2) welford algorithm<br><br>`);
// 평균의 누적(m)과 분산의 누적(s)을 이용하는 방법
let m = 0, s = 0, mOld = 0, sOld = 0;

for(let i = 1; i<gradeArr.length; i++){
    mOld = m;
    sOld = s;
    m = mOld + (gradeArr[i] - mOld) / i;
    s = sOld + (gradeArr[i] - m) * (gradeArr[i] - mOld);
    console.log(m);
    console.log(s);
}
const stDev3 = Math.sqrt(s / (gradeArr.length - 1));

document.write(`- ${stDev3}<br><br>`);
