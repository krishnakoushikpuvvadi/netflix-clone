import express from 'express';
import {  getTrendingMovie } from '../controllers/movieControllers.js';
import { getMovieTrailers } from '../controllers/movieControllers.js';
import { getMovieDetails } from '../controllers/movieControllers.js';
import { getSimilarMovies} from '../controllers/movieControllers.js'
import { getMovieByCategory } from '../controllers/movieControllers.js';

const router = express.Router();

router.get("/trending",getTrendingMovie)
router.get("/:id/trailers",getMovieTrailers);
router.get("/:id/details",getMovieDetails);
router.get("/:id/similar",getSimilarMovies);
router.get("/:category",getMoviesByCategory);


export default router;
