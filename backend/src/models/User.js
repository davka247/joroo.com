// backend/src/models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db"); 

const User = sequelize.define(
  "User",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING, defaultValue: "member" },
  },
  { tableName: "users", timestamps: false } // existing table does not track createdAt/updatedAt
);

module.exports = User;
