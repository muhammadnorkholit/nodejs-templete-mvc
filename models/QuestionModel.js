const { DataTypes } = require("sequelize");
const User = require("./UserModel"); // Pastikan Anda telah mengimpor model UserModel dengan benar
const db = require("../config/db");

const QuestionModel = db.define(
  "question", // Ganti dengan nama tabel yang sesuai, yaitu "question" bukan "Question"
  {
    title: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.TEXT,
      allowNull: false,
    },
    creation_date: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "question", // Ganti dengan nama tabel yang sesuai, yaitu "question" bukan "Question"
    timestamps: false,
  }
);

QuestionModel.belongsTo(User, { foreignKey: "user_id" }); // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)

module.exports = QuestionModel;
