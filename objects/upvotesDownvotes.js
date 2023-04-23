// Write a function that takes as an argument an object containing counts of both upvotes anddownvotes, 
// return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Example:
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31 
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0 
// Notes*
// You can expect only positive integers for vote counts. Answer


function getVoteCount(votes) {
  if (typeof votes.upvotes !== 'number' || typeof votes.downvotes !== 'number' || 
      votes.upvotes < 0 || votes.downvotes < 0) {
    return console.log("Error: You can expect only positive integers for vote counts!");
  } else {
    return console.log(votes.upvotes - votes.downvotes);
  }
}

getVoteCount({ upvotes: 13, downvotes: 0 }); //13
getVoteCount({ upvotes: 2, downvotes: 33 }); //-31
getVoteCount({ upvotes: 132, downvotes: 132 }); //0
getVoteCount({ upvotes: "a", downvotes: 5 }); //Error: You can expect only positive integers for vote counts!
getVoteCount({  upvotes: 8, downvotes: -56 }); //Error: You can expect only positive integers for vote counts!
