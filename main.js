let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let newArr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const btn5=document.getElementById('btn5')
console.log('arrr', arr)

btn5.onclick=function(){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){            
            if(i===0 && j>i) newArr[i][j]=arr[i][j-1]            
            else if(j===arr.length-1 && i>0) newArr[i][j]=arr[i-1][j]
            else if(i===arr.length-1 && j<arr.length-1) newArr[i][j]=arr[i][j+1]
            else if(j===0 && i<arr.length-1) newArr[i][j]=arr[i+1][j]
        }
    }
    arr=JSON.parse(JSON.stringify(newArr))
    console.log('arrr sorted', newArr)

    changPositions(arr)
}

function changPositions(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){  
            console.log('id','btn'+(i*3+j+1) )          
            document.getElementById('btn'+(i*3+j+1)).innerHTML=arr[i][j] 
        }
    }
}