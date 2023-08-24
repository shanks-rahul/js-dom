const button=document.getElementById('btn')
const colorText=document.querySelector('.color')
const hex=[
    '1',
    '2',
    '3' ,
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A','B','C','D','E','F'
]

button.addEventListener('click',()=>{
    const hexcolor=genaeratehexcolor();
    document.body.style.backgroundColor=hexcolor;
    colorText.textContent=hexcolor;
})


genaeratehexcolor=()=>{
    let hexcode='#'
    for(let i = 0;i<6 ;++i){
        hexcode+=hex[generaterandomnumber()];
    }
    return hexcode;
}
generaterandomnumber=()=>{
    return Math.floor((Math.random()*hex.length));    
}