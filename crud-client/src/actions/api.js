import Axios from "axios";

const BASE_URL = "http://localhost:5000/";

export default {
	postMessage(url = BASE_URL + "post-messages/") {
		return {
			fetchAll: () => Axios.get(url),
			fetchById: id => Axios.get(url + id),
			create: newRecord => Axios.post(url, newRecord),
			update: (id, updateRecord) => Axios.post(url + id, updateRecord),
			delete: id => Axios.delete(url + id),
		};
	},
};
