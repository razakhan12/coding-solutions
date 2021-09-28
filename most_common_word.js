var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase();
    paragraph = paragraph.replaceAll(/([!?',;.])/gm," ");
    let mapWordCount = new Map();
    let wordsArray = paragraph.split(" ");
    let maxWordCount = -Infinity;
    let finalWord = "";
    for(let word of wordsArray){
        if(!banned.includes(word) && word !== ""){
            if(mapWordCount.has(word)){
                let val = mapWordCount.get(word);
                mapWordCount.set(word, val+1);
                    if(mapWordCount.get(word) > maxWordCount){
                        finalWord = word;
                        maxWordCount = mapWordCount.get(word);
                    }
            }
            else{
                    mapWordCount.set(word, 1);
                    if(mapWordCount.get(word) > maxWordCount){
                        finalWord = word;
                         maxWordCount = mapWordCount.get(word);
                    }
                }
            }
        }
    return finalWord; 
};