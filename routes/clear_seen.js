import { User } from "../models/user.js";
import { Router } from "express";
const router = Router();

router.post("/", async (req, res) => {
  let obj = JSON.parse(JSON.stringify(req.body));
  try {
    let toDelete = await User.updateOne(
      { username: obj.values },
      { $set: { seen: [] } }
    ).exec();
    res.status(200).send("All seen movies have been deleted");
  } catch (error) {
    res.send(error);
  }
});

export default router;
