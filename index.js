const drumButtons = document.querySelectorAll(".drum").length 


for ( let i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttoHTML = this.innerHTML
        console.log(buttoHTML)
        
        playDrum(buttoHTML)
        buttonAnimation(buttoHTML)
    })
}

document.addEventListener("keydown", (event) => {
    console.log(event.key)
    playDrum(event.key)
    buttonAnimation(event.key)
})




function playDrum(key){
    
        switch(key){
            case "w":
                const tomK1 =  new Audio("sounds/tom-1.mp3 ") 
                tomK1.play()
                break
            case "a":
                const tomK2 =  new Audio("sounds/tom-2.mp3 ") 
                tomK2.play()
                break
            case "s":
                const tomK3 =  new Audio("sounds/tom-3.mp3 ") 
                tomK3.play()
                break
            case "d":
                const tomK4 =  new Audio("sounds/tom-4.mp3 ") 
                tomK4.play()
                break
            case "j":
                const crashK =  new Audio("sounds/crash.mp3") 
                crashK.play()
                break
            case "k":
                const kickBassK =  new Audio("sounds/kick-bass.mp3 ") 
                kickBassK.play()
                break
            case "l":
                const snareK =  new Audio("sounds/snare.mp3 ") 
                snareK.play()
                break 
            default:
                console.log(buttoHTML) 
        }    
}

function buttonAnimation(kurrentKey){
    const clickedButton = document.querySelector("." + kurrentKey )
        clickedButton.classList.add("pressed")
    setTimeout(() =>{
        clickedButton.classList.remove("pressed")
    }, 100)

}


playDrum()

