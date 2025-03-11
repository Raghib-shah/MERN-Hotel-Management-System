const {Router} = require ("express");
const { 
    getBookings,
     createBooking, 
     updateBooking,
     deleteBooking
    } = require("../controllers/bookingcontroller");


router = Router();

router.get("/", getBookings);
router.get("/:id", getBookings);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);


module.exports = router;

