import { Router } from "express";
import { getRocketById, getRockets } from "../services/rockets.service";

const router = Router();

/**
 * @swagger
 * /rockets:
 *   get:
 *     summary: Devuelve una lista de Cohetes
 *     responses:
 *       200:
 *         description: Lista de Cohetes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rocket'
 */
router.get("/", async (req, res) => {
  try {
    const rockets = await getRockets();
    res.json(rockets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch rockets" });
  }
});

/**
 * @swagger
 * /rockets/{id}:
 *   get:
 *     summary: Devuelve un cohete por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cohete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Información del cohete
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rocket'
 */
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
