import { Router } from "express";
import { getFlights } from "../services/flight.service";

const router = Router();

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