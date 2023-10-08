const { DataTypes } = require("sequelize");
const db = require("../config/db");

const TagModel = db.define(
  "tag", // Ganti dengan nama tabel yang sesuai, yaitu "tag" bukan "Tag"
  {
    tag_name: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tag", // Ganti dengan nama tabel yang sesuai, yaitu "tag" bukan "Tag"
    timestamps: false,
  }
);

module.exports = TagModel;
