const axios = require('axios');
exports.getApes = async (req, res, next) => {
  let apes = await axios.get('https://apewisdom.io/api/v1.0/filter/all-stocks');
  const { results } = await apes.data;
  res.status(200).json({ success: true, msg: results });
};
