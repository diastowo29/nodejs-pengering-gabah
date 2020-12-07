const Sequelize = require('sequelize')
const gabahModel = require('./models/gabah-status')
// const lampModel = require('./models/lamp_model')
// const voltModel = require('./models/voltage_model')
// const floodModel = require('./models/flood_model')

var sequelize_db;

if (process.env.DATABASE_URL === undefined) {
	sequelize_db = new Sequelize('postgres', 'postgres', 'R@hasia', {
	  host: 'localhost',
	  dialect: 'postgres'
	});
} else {
	sequelize_db = new Sequelize(process.env.DATABASE_URL, {
		logging: false,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
		    },
		    keepAlive: true,
		},      
		ssl: true
	})
}


const gabah_table = gabahModel(sequelize_db, Sequelize)
// const lamp_table = lampModel(sequelize_db, Sequelize)
// const volt_table = voltModel(sequelize_db, Sequelize)
// const flood_table = floodModel(sequelize_db, Sequelize)

sequelize_db.sync()
  .then(() => {
    console.log(`Database & tables created!`)
    })

module.exports = {
	gabah_table
    // parking_table,
    // lamp_table,
    // volt_table,
    // flood_table
}