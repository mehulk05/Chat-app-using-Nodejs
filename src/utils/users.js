const users = []
const newuser = []
const addUser = ({ id, username, room }) => {
    //clean the data

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //vlidate data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    //check for existing users
    const existingUser = users.find((user) => {
        return user.room == room && user.username == username
    })

    //va;idate username
    if (existingUser) {
        return {
            error: "username iss already used"
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}


const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => {
        return user.id === id
    })
}

const getUserInRoom = (room) => {
    const u = []
    users.filter((user) => {

        user.room === room
    })
    console.log(users)
    return users

}

module.exports = {
    addUser, removeUser, getUser, getUserInRoom
}