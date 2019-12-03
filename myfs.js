const fs = require('fs');
//첫번쨰문제
// fs.readFile('list.txt', 'utf-8', (err, data) => {
//     if(err){console.log(err);}
//     let listModel = data.split('\r\n');
//     let topModel;
//     for(let model of listModel){
//         let price = model.split(':')[2];
//         if(!topModel){
//             topModel = model;
//         }else{
//             if(Number(topModel.split(':')[2]) < Number(price)){
//                 topModel = model;
//             } 
//         }
//     }
//     let modelArr = topModel.split(':');
//     console.log(`가장 비싼 제품의 모델명 : ${modelArr[0]}, 메이커 : ${modelArr[1]}, 가격 : ${modelArr[2]}`)
// })
//변경된문제
fs.readFile('list.txt', 'utf-8', (err, data) => {
    if(err){console.log(err);}
    let listModel = data.split('\r\n');
    let topModel;
    for(let model of listModel){
        model = JSON.parse(model);
        if(!topModel){
            topModel = model;
        }else{
            if(Number(topModel.price) < Number(model.price)){
                topModel = model;
            } 
        }
    }
    console.log(`가장 비싼 제품의 모델명 : ${topModel.modelname}, 메이커 : ${topModel.maker}, 가격 : ${topModel.price}`)
})