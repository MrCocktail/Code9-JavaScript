let name = "jolibois grossouffle jean-pierre", getFirstLetter, FirstLetterUp
name = name.toLowerCase()
name = name.split(" ")
for (let i = 0; i < name.length; i++){
    getFirstLetter = name[i][0]
    FirstLetterUp = getFirstLetter.toUpperCase()
    name[i] = name[i].replace(getFirstLetter,FirstLetterUp)
    if (name[i].includes("-")){
        idx = name[i].indexOf("-")
        name[i] = name[i].replace(name[i][idx+1], name[i][idx+1].toUpperCase()) 
    }

    
}
console.log(name.join(" "));