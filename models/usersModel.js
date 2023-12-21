const { DataTypes } = require("sequelize");
const db = require("../config/db");
const users = db.define(
  "users",
  {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM("anggota", "admin", "petugas"),
  },
  {
    tableName: users,
    timestamps: false,
  }
);
module.exports = users;
