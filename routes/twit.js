const router = require('express').Router()
const OAuth = require('oauth')
require('dotenv').config()

router.post('/tweet', (req, res)=> {
  let oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_CONS_KEY,
    process.env.APP_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  )
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${req.query.tw}`,
    process.env.ACC_TOKEN,
    process.env.ACC_SECRET,
    `${req.query.tw}`,
    `text`,
    (err, data)=> {
      if(err) console.error(err)
      res.send(data)
    }
  )
})

module.exports = router