import express  from "express";
import {removeItemFromSearchHistory, searchPerson} from '../controllers/searchControllers.js'
import {searchMovie} from '../controllers/searchControllers.js'
import {searchTv} from '../controllers/searchControllers.js'
import {getSearchHistory} from '../controllers/searchControllers.js'


const router = express.Router();


router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router.get("/tv/:query",searchTv);

router.get("/history",getSearchHistory);
router.delete("/history/:id",removeItemFromSearchHistory);



export default router;