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
  console.log(req.query)
  gabah_table.findOne().then(all_gabah => {
    dData = all_gabah
    res.status(200).send({
      kadar_air_objek: dData.kadar_air_objek,
      suhu: dData.suhu,
      status_mesin: dData.status_mesin
    })
  });
})

router.post('/update', function(req, res, next) {
  // res.render('list');
  
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
