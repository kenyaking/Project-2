module.exports = function(sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
      PlayerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
          type: DataTypes.STRING,
          allowNull:false,
          validate: {
              notNull: true,
              isAlphanumeric: true
          }
      },
      TeamId: DataTypes.INTEGER,
      ItemId: DataTypes.INTEGER,
      Lives: {
        type: DataTypes.INTEGER,
        defaultValue: 3
      },
      OpposingTeamId: DataTypes.INTEGER,
      Gold : DataTypes.INTEGER
    },
    {
        timestamps: false
    });
    return Players;
};