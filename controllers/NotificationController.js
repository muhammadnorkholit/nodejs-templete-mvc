class Notification {
  static async index(req, res) {
    res.json({ message: " index  is work" });
  }
  static async create(req, res) {
    res.json({ message: " create  is work" });
  }
  static async store(req, res) {
    res.json({ message: " store  is work" });
  }
  static async show(req, res) {
    res.json({ message: " show  is work" });
  }
  static async update(req, res) {
    res.json({ message: " update  is work" });
  }
  static async delete(req, res) {
    res.json({ message: " delete  is work" });
  }
}
module.exports = Notification;
