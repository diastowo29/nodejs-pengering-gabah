const Sequelize = require('sequelize')
const gabahStatusModel = require('./models/gabah-status')
const gabahPingModel = require('./models/gabah-ping')

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


const gabah_table = gabahStatusModel(sequelize_db, Sequelize)
const gabah_ping_table = gabahPingModel(sequelize_db, Sequelize)

sequelize_db.sync()
  .then(() => {
    console.log(`Database & tables created!`)
    })

module.exports = {
	gabah_table,
	gabah_ping_table
}