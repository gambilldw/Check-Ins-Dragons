module.exports = function(sequelize, DataTypes) {
 
    var Character = sequelize.define('character', {
 
        characterName: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        characterClass: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        characterRace: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        characterStrength: {
            type: DataTypes.INTEGER,
            notEmpty: true
        },

        characterHealth: {
            type: DataTypes.INTEGER,
            notEmpty: true
        },
 
        status: {
            type: DataTypes.ENUM('alive', 'dead'),
            defaultValue: 'alive'
        }
 
    });

    // Character.associate = function(models) {
    //     Character.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
 
    return Character;
 
}