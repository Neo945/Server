const router = require('express').Router();

// Routes for the API (all the user routes are prefixed with /auth) Auth
router.use('/api/v1/auth', require('./routes/user.routes'));

router.use('/api/v1/bot', require('./routes/automessage.routes'));

router.use('/api/v1/vc', require('./routes/vc.routes'));

router.use('/', require('./routes/template.routes'));

// Routes for the API (all the routes are prefixed with /music) Music related routes
// router.use('/music', require('./routes/music.routes'));

// router.get('/', (req, res) => {
//     require('./config/socket.config')(require('./server').server).on('connection', (socket) => {
//         console.log('a user connected');
//     });
//     res.send('Hello! from muscia, and setup done');
// });

module.exports = router;
