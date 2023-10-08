const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Comment = db.define(
  "Comment",
  {
    content: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.STRING,
      allowNull: false,
    },
    creation_date: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "comment", // Ganti dengan nama tabel yang sesuai, yaitu "question" bukan "Question"
    timestamps: false,
  }
);
module.exports = Comment;
