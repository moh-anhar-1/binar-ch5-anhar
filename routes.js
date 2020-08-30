const express = require('express');
const users = require('./users-api/users.json');
const router = express.Router();

// chapter 3
router.get('/chapter3', (req, res)=>{
    res.sendFile('./chapter-3/index.html', { root: __dirname });
});

// chapter 4
router.get('/chapter4', (req, res)=>{
    res.sendFile('./chapter-4/game.html', { root: __dirname });
});

// user static
router.get('/users', (req, res)=>{

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
    }
    // users.users.sort(compare);
    res.json(users.users.sort(compare));

});

// handle 404 url
router.use('*', (req, res)=>{
    res.sendFile('./404/404.html', { root: __dirname });
});
    
module.exports = router;