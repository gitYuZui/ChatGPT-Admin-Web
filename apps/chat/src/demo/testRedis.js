const Redis = require("@upstash/redis")
const redis = new Redis({
    url: 'https://rare-hawk-36463.upstash.io',
    token: '66c65f854f394f3d838ccb620debf8e4',
})
console.log( redis )
redis.set('foo', 'bar');

