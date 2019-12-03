for(let i=0;i<10;i++){
    console.log(i);
}

var emp = {
    id:1111,
    name:'haha'
}

for(let ele in emp){
    console.log(ele + ':' + emp[ele])
}


/*
다음 방정식의 해를 출력하시오.
2x + y = 10
단 , x,y는 0보다같거나 크고 10보다 같거나 작은 정수이다.

- 변수를 선언
- 제어문으로 해를 구하여 출력
*/


for(let x = 0 ; x <= 10 ; x ++){
    for(let y = 0 ; y <= 10; y++){
        if((x*2) + y == 10){
            console.log(`2x + y = 10 방정식에 해당하는 값은\nx : ${x} y : ${y}`);
        }
    }
}
