const Blog = require("./model");
const { ObjectID } = require("mongodb");

const getAll = async (req, res) => {
  try {
    const blogPosts = await Blog.find({});
    res.send(blogPosts);
  } catch (e) {
    res.status(400).send();
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  try {
    const blogPost = await Blog.findById(id);

    if (!blogPost) {
      res.status(404).send();
    }

    res.send(blogPost);
  } catch (e) {
    res.status(400).send();
  }
};

const create = async (req, res) => {
  const { title, text } = req.body;
  const blogPost = new Blog({ text, title });

  try {
    const doc = await blogPost.save();

    res.send(doc);
  } catch (e) {
    res.status(400).send();
  }
};

const update = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    res.status(400).send();
  }

  try {
    const blogPost = await Blog.findByIdAndUpdate(id, body, { new: true });

    if (!blogPost) {
      res.status(404).send();
    }

    res.send(blogPost);
  } catch (e) {
    res.status(400).send();
  }
};

const remove = async (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid) {
    res.status(400).send();
  }

  try {
    const blogPost = await Blog.findByIdAndDelete(id);

    res.send(blogPost);
  } catch (e) {
    res.status(400).send();
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
