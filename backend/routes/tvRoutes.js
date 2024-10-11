import express from 'express';

import { getTvTrailers ,getSimilarTv,getTrendingTv,getTvDetails,getTvsByCategory} from '../controllers/tvControllers.js';


const router = express.Router();

router.get("/trending",getTrendingTv);
router.get("/:id/trailers",getTvTrailers);
router.get("/:id/details",getTvDetails);
router.get("/:id/similar",getSimilarTv);
router.get("/:category",getTvsByCategory);


export default router;