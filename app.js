var words = ["bat", "tap", "cat", "tab", "pat"];
var anagramWords = [[]]


let anagram = (a, b) => {
    return a.split('').sort().join('') == b.split('').sort().join('')
}

for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
        if (anagram(words[i], words[j])) {
            anagramWords.push([words[i], words[j]])
        }
    }
}

console.log(anagramWords);


