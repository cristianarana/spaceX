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
router.get("/:ids", async (req, res) => {
    const ids = req.params.ids.split(",");
    try{
        const flights = await getFlights(ids);
        res.json(flights);
    }catch(error){
        res
        .status(500)
        .json({ error: `Failed to fetch launch with id ${req.params.ids}` });
    }
});

export default router;