for(let i = 1; i < 6; i++) {
    let pattern = '';
    for (let j = 0; j < i; j++) {
        pattern += '* '; //a star * is added to the pattern string for each iteration
    }
    console.log(pattern);
}
// The final output of this code will be a pattern of stars like this:
// *
// * *
// * * *
// * * * *
// * * * * *