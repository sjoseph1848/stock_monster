const axios = require('axios');

exports.getFinancialprepSentiment = async (req, res, next) => {
  let { data } = await axios.get(
    `https://financialmodelingprep.com/api/v4/social-sentiment?symbol=${req.params.id}&limit=100&apikey=${process.env.FIN_KEY}`
  );
  // const { results } = await sentiment.data;
  let getRHIAvg = await avgRHI(data);

  res.status(200).json({ success: true, msg: getRHIAvg });
};

let avgRHI = async (rhi) => {
  let rhiArr = [];
  rhi.map((item) => {
    rhiArr.push(item.relativeIndex);
  });

  let totalSum = 0;
  rhiArr.map((item) => {
    totalSum += item;
  });
  let rhiAverage = totalSum / rhiArr.length;
  let mostRecent = rhiArr[0];
  let earliest = rhiArr[rhiArr.length - 1];
  let diff = mostRecent - earliest;
  let chatDirection;
  if (diff < 0) {
    chatDirection = 'negative';
  } else {
    chatDirection = 'positive';
  }
  let rhiObj = {
    avg: rhiAverage,
    newest: mostRecent,
    oldest: earliest,
    diff,
    chatDirection,
    ind: 'rhi',
  };
  return rhiObj;
};
