var express = require('express');
const { gabah_table } = require('../sequelize')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alat Pengering Gabah' });
});

router.get('/list', function(req, res, next) {
  res.render('list');
})

router.get('/status', function(req, res, next) {
  gabah_table.findOne().then(all_gabah => {
    dData = all_gabah
    res.status(200).send({
      kadar_air_objek: dData.kadar_air_objek,
      suhu: dData.suhu,
      status_mesin: dData.status_mesin
    })
  });
})

module.exports = router;
