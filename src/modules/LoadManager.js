import Settings from "./Settings";

export default {
  getAllLoads() {
      return fetch(`${Settings.remoteURL}/loads`).then(e => e.json());
  },
  addLoad(newLoad) {
      return fetch(`${Settings.remoteURL}/loads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newLoad)
      }).then(data => data.json())
   },
    getLoad(id) {
        return fetch(`${Settings.remoteURL}/loads/?driver_id=${id}`).then(e => e.json());
    },
    deleteLoad(id) {
        return fetch(`${Settings.remoteURL}/loads/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    updateLoad(editedLoad) {
        return fetch(`${Settings.remoteURL}/loads/${editedLoad.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedLoad)
        }).then(data => data.json());
    },
    getLoadsByUser(type_id) {
      return fetch (`${Settings.remoteURL}/users/?type_id=${type_id}}`).then(e =>
        e.json()
      )
      }
};