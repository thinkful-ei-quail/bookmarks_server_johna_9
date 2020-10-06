module.exports = (req, res, next) => {
  const token = process.env.API_TOKEN;
  const authMethod = req.get('Authorization');

  if (!authMethod || !authMethod.toLowerCase().startsWith("bearer ") || authMethod.substring(7).trim() !== token) {
    res.status(401).json({ error: 'Unauthorized access; please provide proper authentication' });
  } else {
    next();
  }
};