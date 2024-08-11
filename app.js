var words = ["bat", "tap", "cat", "tab", "pat"];
var anagramWords = []

for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
        var sorted = words[i].split('').sort().join('') == words[j].split('').sort().join('')
        if (sorted) {
            anagramWords.push([words[i], words[j]])
        }
    }
}
console.log(anagramWords);
