const { DataTypes } = require("sequelize");
const User = require("./UserModel"); // Pastikan Anda telah mengimpor model UserModel dengan benar
const Question = require("./QuestionModel"); // Pastikan Anda telah mengimpor model QuestionModel dengan benar
const db = require("../config/db");

const AnswerModel = db.define(
  "answer", // Ganti dengan nama tabel yang sesuai, yaitu "answer" bukan "Answer"
  {
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
    tableName: "answer", // Ganti dengan nama tabel yang sesuai, yaitu "answer" bukan "Answer"
    timestamps: false,
  }
);

AnswerModel.belongsTo(User, { foreignKey: "user_id" }); // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
AnswerModel.belongsTo(Question, { foreignKey: "question_id" }); // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)

module.exports = AnswerModel;
