// Write a function to replace all instances of character c1 with character c2 and vice versa.
// ( "aabbccc", "a", "b") ➞ "bbaaccc"
// ("random w#rds writt&n h&r&", "#", "&")➞ "random w&rds writt#n h#r#"

function replaceInstances(str, character1, character2) {
  const chars = str.split('');

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === character1) {
      chars[i] = character2;
    } else if (chars[i] === character2) {
      chars[i] = character1;
    }
  }
  return chars.join('');
}

console.log(replaceInstances("aabbccc", "a", "b")); //bbaaccc
console.log(replaceInstances("random w#rds writt&n h&r&", "#", "&")); //random w&rds writt#n h#r#
