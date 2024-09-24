import { Router } from "express";
import { getLaunches, getLaunchById } from "../services/launches.service";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const launches = await getLaunches();
    res.json(launches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch launches" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const launch = await getLaunchById(req.params.id);
    res.json(launch);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to fetch launch with id ${req.params.id}` });
  }
});

export default router;
