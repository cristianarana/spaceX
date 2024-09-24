import { Router } from "express";
import { getRocketById, getRockets } from "../services/rockets.service";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const rockets = await getRockets();
    res.json(rockets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch rockets" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const rocket = await getRocketById(req.params.id);
    res.json(rocket);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to fetch rocket with id ${req.params.id}` });
  }
});

export default router;
