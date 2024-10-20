const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('supply', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql', 
});


const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');


        await sequelize.sync({ force: false }); 
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

module.exports = sequelize;
