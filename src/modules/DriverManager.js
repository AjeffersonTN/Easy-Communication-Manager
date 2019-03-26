import Settings from "./Settings";

export default {
    getUser(id) {
        return fetch(`${Settings.remoteURL}/users/${id}`).then(e => e.json());
    },
    deleteUser(id) {
      return fetch(`${Settings.remoteURL}/loads/${id}`, {
          "method": "DELETE"
      }).then(e => e.json());
    },
    getAllUsers() {
        return fetch(`${Settings.remoteURL}/users`).then(e => e.json());
    },
    addUser(newUser) {
        return fetch(`${Settings.remoteURL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        }).then(data => data.json())
    },
};