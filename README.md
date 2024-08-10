# Anagram Word Grouping

## Description
This task involves detecting anagrams from an array of words and grouping them together. An anagram is a word that can be formed by rearranging the letters of another word. For example, "bat" and "tab" are anagrams.

The program processes the input array, identifies words that are anagrams, and groups them into sub-arrays. The final output is an array of arrays, where each sub-array contains words that are anagrams of one another.

## Sample Input
```javascript
["bat", "tap", "cat", "tab", "pat"].




# How It Works
Sorting Method: For each word, the characters are sorted alphabetically. Anagrams result in the same sorted string.
Grouping: The program compares each word by its sorted characters and groups them into sub-arrays.
Final Output: The result is an array of arrays, with each sub-array containing words that are anagrams.
# Usage
Clone or download the repository.
Navigate to the file containing the code.
Run the script to see the anagram words grouped together.
Example
Here’s an example of how to use the function in your code:

# javascript
Copy code
const words = ["bat", "tap", "cat", "tab", "pat"];
const result = groupAnagrams(words);

console.log(result); // Output: [ ['bat', 'tab'], ['tap', 'pat'], ['cat'] ]
