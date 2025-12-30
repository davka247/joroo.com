const { DataTypes } = require("sequelize");
const sequelize = require("../db");

// Horse registration data aligned with the frontend form
const Horse = sequelize.define(
  "Horse",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    ownerName: { type: DataTypes.STRING, allowNull: false },
    ownerPhone: { type: DataTypes.STRING, allowNull: false },
    trainerName: { type: DataTypes.STRING },
    trainerPhone: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    birthPlace: { type: DataTypes.STRING },
    fatherLine: { type: DataTypes.JSON }, // array of strings
    motherLine: { type: DataTypes.JSON }, // array of strings
    imageUrl: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING },
  },
  {
    tableName: "horses",
    timestamps: false, // align with existing DB table without createdAt/updatedAt
  }
);

module.exports = Horse;
