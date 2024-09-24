import { Router } from "express";
import { getLaunches, getLaunchById } from "../services/launches.service";

const router = Router();

/**
 * @swagger
 * /launches:
 *   get:
 *     summary: Devuelve una lista de lanzamientos
 *     responses:
 *       200:
 *         description: Lista de lanzamientos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Launch'
 */
router.get("/", async (req, res) => {
  try {
    const launches = await getLaunches();
    res.json(launches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch launches" });
  }
});

/**
 * @swagger
 * /launches/{id}:
 *   get:
 *     summary: Devuelve un lanzamiento por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del lanzamiento
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Información del lanzamiento
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Launch'
 */
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
