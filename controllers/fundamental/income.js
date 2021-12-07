exports.getIncome = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, count: 20, data: 'Here' });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
