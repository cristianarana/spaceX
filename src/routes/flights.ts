import { Router } from "express";
import { getFlights } from "../services/flight.service";

const router = Router();

/**
 * @swagger
 * /flights/{ids}:
 *   get:
 *     summary: Devuelve un array de vuelos por IDs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de vuelos
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Información del vuelos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Flight'
 */
router.get("/", async (req, res) => {
  const flights = await getFlights();
  res.json(flights);
});

export default router;
