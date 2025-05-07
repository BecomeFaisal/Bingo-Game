let btuns = document.querySelectorAll(".btum");
let letter = document.querySelectorAll(".Letters-Bingo")
let arr = Array.apply(null,{length:26}).map(Number.call, Number);
let clickSound = document.querySelector(".clickSound");
let winSound = document.querySelector(".winSound");
clickSound.loop = false;
arr.shift();
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return Array;
}
shuffleArray(arr);
let i = 0;
for(dibba of btuns){
    dibba.innerText = arr[i];
    i++;
}
console.log(arr);
    
    let winsIterator = 0;
btuns.forEach(e=>{
    e.addEventListener("click",()=>{
      clickSound.play();
        e.classList.add("strike");
        if(Matches()){
             letter[winsIterator].classList.add("strike");
             winsIterator++;
             if(winsIterator ===5){
                winSound.play();
            }
        }
    })
})

const winningPos = [
    [0,1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    [0,5,10,15,20],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24]
];

function Matches(){
    return winningPos.some(combination =>{
        let itr = 0;
        combination.forEach(index => {
            if(btuns[index].classList.contains("strike")) itr++;
        })

        if(itr===5){
            let indexWin = winningPos.indexOf(combination);
            winningPos.splice(indexWin,1)
        }

        return combination.every(index => {
            return btuns[index].classList.contains("strike")
        })
    })
}