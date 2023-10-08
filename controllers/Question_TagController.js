
class Question_Tag {
  static index(req,res) {
    res.json({message:" index  is work"});
  }
  static create(req,res) {
    res.json({message:" create  is work"});
  }
  static store(req,res) {
    res.json({message:" store  is work"});
  }
  static show(req,res) {
    res.json({message:" show  is work"});
  }
  static update(req,res) {
    res.json({message:" update  is work"});
  }
  static delete(req,res) {
    res.json({message:" delete  is work"});

  }
}
module.exports = Question_Tag
