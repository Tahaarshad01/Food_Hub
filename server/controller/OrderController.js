import Order from "../model/Order.js";

export const sendData = async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { Order_date: req.body.order_date });

  let emailId = await Order.findOne({ email: req.body.email });
  console.log(emailId);

  if (emailId === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.status({ success: true });
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};

export const getOrder = async (req, res) => {
  try {
    let mydata = await Order.findOne({ email: req.body.email });
    res.json({ orderData: mydata });
  } catch (error) {
    return res.send(500).json(error.message);
  }
};
