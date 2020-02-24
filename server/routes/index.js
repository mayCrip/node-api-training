const express = require('express');
const db = require('../db');


const router = express.Router();

router.get('/', async (req, resp, next) => {
  try {
    let results = await db.allUsers();
    
    resp.json(results);
  } catch(e) {
    console.log(e);

    resp.sendStatus(500);
  }
});

router.post('/', async (req, resp) => {
  try {
    let results = await db.insertUser(req.body);
    
    resp.json(results);
  } catch(e) {
    console.log(e);

    resp.sendStatus(500);
  }
});

module.exports = router;