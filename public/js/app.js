console.log('Client side javascript file is loaded!')

fetch('http://puzzle.read.io/puzzle').then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    })
})