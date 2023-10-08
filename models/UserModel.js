const { DataTypes } = require("sequelize");
const db = require("../config/db");

const UserModel = db.define(
  "user", // Ganti dengan nama tabel yang sesuai, yaitu "user" bukan "User"
  {
    first_name: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.STRING,
      allowNull: false,
    },
    join_date: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.DATE,
      allowNull: false,
    },
    avatar: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.STRING,
    },
    role: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.ENUM("user", "moderator", "admin"),
      allowNull: false,
    },
  },
  {
    tableName: "user", // Ganti dengan nama tabel yang sesuai, yaitu "user" bukan "User"
    timestamps: false,
  }
);

module.exports = UserModel;
