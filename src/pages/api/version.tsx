export default (req, res) => {
  res.status(200).json({ version: process.env.npm_package_version });
};
