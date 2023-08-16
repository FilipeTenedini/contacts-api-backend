import CategoryRepository from "../repositories/category-repository.js";

class CategoryController {
  async index(req, res) {
    const categories = await CategoryRepository.findAll();

    res.json(categories)
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) return res.status(400).json({ error: 'Name is required' });

    const category = await CategoryRepository.create({ name });

    res.json(category);
  }
}

export default new CategoryController();