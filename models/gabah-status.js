module.exports = (sequelize, type) => {
    return sequelize.define('gabah-status', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        kadar_air_objek: type.FLOAT,
        kadar_air_humidity: type.FLOAT,
        suhu: type.FLOAT,
        status_mesin: type.STRING(10),
        kelembapan: type.FLOAT,
        pwm_heater: type.FLOAT
    });
}