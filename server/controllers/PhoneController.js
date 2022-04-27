const { Phone } = require("../models/index");

class PhoneController {
  static async fetchPhones(req, res, next) {
    try {
      const phones = await Phone.findAll();

      res.status(200).json(phones);
    } catch (error) {
      next(error);
    }
  }

  static async fetchPhoneById(req, res, next) {
    try {
      const { id } = req.params;
      const phone = await Phone.findByPk(id);

      if (!phone) throw { name: "Not found" };

      res.status(200).json(phone);
    } catch (error) {
      next(error);
    }
  }

  static async addPhone(req, res, next) {
    try {
      const { name, price, brand, released } = req.body;
      const obj = {
        name,
        price: +price,
        brand,
        released,
      };

      await Phone.create(obj);
      res.status(201).json({ message: "Create success" });
    } catch (error) {
      next(error);
    }
  }

  static async editPhoneById(req, res, next) {
    try {
      const { name, price, brand, released } = req.body;
      const { id } = req.params;

      const phone = await Phone.findByPk(id);

      if (!phone) throw { name: "Not found" };

      const obj = {
        name,
        price: +price,
        brand,
        released,
      };

      await Phone.update(obj, { where: { id } });
      res.status(200).json({ message: "Update Success" });
    } catch (error) {
      next(error);
    }
  }

  static async deletePhoneById(req, res, next) {
    try {
      const { id } = req.params;

      const phone = await Phone.findByPk(id);

      if (!phone) if (!phone) throw { name: "Not found" };

      await Phone.destroy({ where: { id } });

      res.status(200).json({ message: "Delete Success" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PhoneController;
