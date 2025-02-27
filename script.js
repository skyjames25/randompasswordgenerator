const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordBox1 = document.querySelector(".password-box1")
let passwordBox2 = document.querySelector(".password-box2")


function generateRandomPassword() {
    let randomPasswords = ""
    for (let i=0; i<15; i++){
        let chr = characters[Math.floor(Math.random() * characters.length)]
        randomPasswords += chr
    }
    return randomPasswords

}


function generatePasswords() {
    let passwordsList = []
    for (let i=0;i<2;i++){
        let randomPasswordGenerated = generateRandomPassword()
        console.log(randomPasswordGenerated)
        passwordsList.push(randomPasswordGenerated)
    }

    passwordBox1.textContent = passwordsList[0]
    passwordBox2.textContent = passwordsList[1]
}

