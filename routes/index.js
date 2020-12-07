var express = require('express');
const gabahPing = require('../models/gabah-ping');
const { gabah_table, gabah_ping_table } = require('../sequelize')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alat Pengering Gabah' });
});

router.get('/list', function(req, res, next) {
  gabah_ping_table.findAll().then(all_gabah_ping => {
    res.render('list', {
			title: 'Dashboard',
			gabah_ping: all_gabah_ping
		});
  })
})

router.get('/status/:humidity/:kelembaban/:pwm', function(req, res, next) {
  gabah_table.findOne().then(all_gabah => {
    dData = all_gabah
    gabah_ping_table.create({
      kadar_air_objek: dData.kadar_air_objek,
      suhu: dData.suhu,
      status_mesin: dData.status_mesin,
      kadar_air_humidity: req.params.humidity,
      kelembapan: req.params.kelembaban,
      pwm_heater: req.params.pwm
    });
    res.status(200).send({
      kadar_air_objek: dData.kadar_air_objek,
      suhu: dData.suhu,
      status_mesin: dData.status_mesin
    })
  });
})

router.get('/clearall', function(req, res, next) {
  res.send({});
})

router.post('/update', function(req, res, next) {
  console.log(req.body)
  gabah_table.findOne().then(all_gabah => {
    dData = all_gabah
    gabah_table.update(req.body,{
      where: {
        id: dData.id
      }
    }).then(gabah_table_update => {
      res.status(200).send(gabah_table_update);
    })
  });

})

router.get('/insert', function(req, res, next) {
  // res.render('list');
  gabah_table.create({
    kadar_air_objek: "12.5",
    suhu: "55",
    status_mesin: "stop"
  }).then(created_status => {
    res.status(200).send(created_status);
  });
})

module.exports = router;
