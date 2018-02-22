"use strict";

function wait (number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, number);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



    function lastCommit(username){
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token b184bd352a1bc485224445791dd79dba718def8d'}})
        .then((response) => response.json())
        .then(data => {
            let lastCommit = data[0].created_at.substring(0, 10);
            console.log(`${username}'s last commit was on: ${lastCommit}`)
        })
        .catch(() => console.error('error'));
}
lastCommit('chriskmaddin');










