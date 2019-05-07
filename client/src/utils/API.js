import axios from "axios";

export default {

    getProjects: function() {
        return axios.get("/api/project/");
    },

    createProject: function(project) {
        return axios.post("/api/project/createproject", project);
    },

    createLog: function(entry) {
        return axios.post("/api/log/createlog", entry);
    }

};