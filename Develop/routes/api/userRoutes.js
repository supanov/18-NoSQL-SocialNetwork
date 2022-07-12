const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateSingleUser,
    deleteUser,
    createFriend,
    deleteFriend,
} = require("../../controllers/userController")

// api/ users 
router.route('/').get(getUsers).post(createUser);

// api/users/:userId
router
.route("/:userId")
.get(getSingleUser)
.delete(deleteSingleUser)
.put(updateSingleUser);

// api/ users/:userId/friends/friendId

router
.route("/:userId/friends/friendId")
.post(createFriend)
.delete(deleteFriend);

module.exports = router; 
