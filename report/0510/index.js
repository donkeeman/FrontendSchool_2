document.write(`1. 화살표 함수 일반 함수로 바꾸기<br><br>`);

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

// data.map(x => x.중간고사점수
document.write(`- ${data.map(
    function(x){
        return x.중간고사점수;
    }
)}<br><br>`);

// data.map(x => [x.이름,x.중간고사점수])
document.write(`- ${data.map(
    function(x){
        return [x.이름, x.중간고사점수];
    }
)}<br><br>`);



let data2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let newData = data.map(a => a.map(n => n * 2));

let newData = data2.map(function(a){
    return a.map(function(n){
        return n * 2;
    });
});

document.write(`- ${newData}<br><br>`);

document.write(`2. 평균 구하는 함수<br><br>`);

const average = (array) => {
    return array.reduce((a, b) => a+b, 0) / array.length;
};

document.write(`- ${average([10, 20, 30, 40])}<br><br>`);

document.write(`3. 숫자 단위 콤마 찍는 함수<br><br>`);

const comma = (n) => {
    if(n < 1000)
        return n;
    n += "";
    let n2 = n.split("");
    for(let i = n.length % 3; i<=n.length; i+=4){
        if(i === 0)
            n2.splice(i, 0, "");
        else
            n2.splice(i, 0, ",");
    }
    return n2.join("");
};

const comma2 = (n) => {
    if(n < 1000)
        return n;
    n += "";
    for(let i = n.length-3; i > 0; i-=3){
        console.log(i);
        n = n.slice(0, i) + "," + n.slice(i);
    }
    return n;
}

document.write(`- ${comma(1000000000)}<br><br>`);
document.write(`- ${comma2(1000000000)}<br><br>`);
