//async await
const axios = require('axios')

async function add(){
    await axios.get('www.google.com').then(
        res=>{
            console.log('$$$');
        },
        err=>{
            console.log('###');
        }
    )
    await axios.get('www.google.com').then(
        res=>{
            console.log('...');
        },
        err=>{
            console.log('!!!');
        }
    )

    console.log('@@@');
}

add()