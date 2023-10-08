const { DataTypes } = require("sequelize");
const User = require("./UserModel"); // Pastikan Anda telah mengimpor model UserModel dengan benar
const Question = require("./QuestionModel"); // Pastikan Anda telah mengimpor model QuestionModel dengan benar
const Answer = require("./AnswerModel"); // Pastikan Anda telah mengimpor model AnswerModel dengan benar
const db = require("../config/db");

const VoteModel = db.define(
  "vote", // Ganti dengan nama tabel yang sesuai, yaitu "vote" bukan "Vote"
  {
    vote_type: {
      // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
      type: DataTypes.ENUM("upvote", "downvote"),
      allowNull: false,
    },
  },
  {
    tableName: "vote", // Ganti dengan nama tabel yang sesuai, yaitu "vote" bukan "Vote"
    timestamps: false,
  }
);

VoteModel.belongsTo(User, { foreignKey: "user_id" }); // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
VoteModel.belongsTo(Question, { foreignKey: "question_id" }); // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)
VoteModel.belongsTo(Answer, { foreignKey: "answer_id" }); // Gunakan nama kolom sesuai dengan nama kolom pada tabel (huruf kecil)

module.exports = VoteModel;
