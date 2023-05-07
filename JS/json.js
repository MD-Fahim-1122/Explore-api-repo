const shop = {
    owner :'faisal',
    address :{
        street : 'kola bagan',
        house : '420/kha',
        city : 'satkhira',
        country : 'Bangladesh' 
    },
    product : [
        'laptop','computer','mobile','tablet','mouse',
    ],
    revenue : 45000,
    isOpen : true,
    isOld : true,
}
const shopjson = JSON.stringify(shop);
// console.log(shop)
// console.log(shopjson);

const jsonObj = JSON.parse(shopjson);
console.log(jsonObj);