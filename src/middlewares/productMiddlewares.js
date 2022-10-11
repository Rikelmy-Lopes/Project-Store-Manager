const validadeNameProduct = (request, response, next) => {
  const { name } = request.body;
  if (name === undefined) {
    response.status(400).json({ message: '"name" is required' });
    return;
  }

  if (name.length < 5) {
    response.status(422).json({ message: '"name" length must be at least 5 characters long' });
    return;
  }

  next();
};

module.exports = {
  validadeNameProduct,
};