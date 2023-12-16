let UserDetails={
    alakhSir:{
        balance:2510000
    },
    Zaid:{
        balance:7510
    },
    Rahul:{
        balance:3500
    }
} 

let name=document.getElementById('name')
let action = document.getElementById('action')
let button=document.querySelector('button')
let amount=document.getElementById('amount')
let select=document.querySelector('#action')
let h2=document.querySelector('h2')
button.addEventListener('click',()=>{

    if(select.value=='deposit'){
        UserDetails[name.value].balance += Number(amount.value)
    }
    if(select.value=='withdrawal'){
        UserDetails[name.value].balance -= Number(amount.value)
    }
    h2.innerHTML = `Your current balance:- ${UserDetails[name.value].balance}`
})
// let UserDetails={
//     alakhSir:{
//         balance:2510000
//     },
//     Zaid:{
//         balance:7510
//     },
//     Rahul:{
//         balance:3500
//     }
// } 

// let name=document.getElementById('name')
// let action = document.getElementById('action')
// let button=document.querySelector('button')
// let amount=document.getElementById('amount')
// let select=document.querySelector('#action')
// let h2=document.querySelector('h2')
// button.addEventListener('click',()=>{

//     if(select.value=='deposit'){
//         UserDetails[name.value].balance += Number(amount.value)
//     }
//     if(select.value=='withdrawal'){
//         UserDetails[name.value].balance -= Number(amount.value)
//     }
//     h2.innerHTML = `Your current balance:- ${UserDetails[name.value].balance}`
// })