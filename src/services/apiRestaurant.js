import axios from "axios";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
	try {
		const response = await axios(`${API_URL}/menu`);
		const data = response.data.data;
		return data;
	} catch (error) {
		throw new Error("Failed getting menu");
	}
}

export async function getOrder(id) {
	try {
		const response = await axios(`${API_URL}/order/${id}`);
		const data = response.data.data;
		return data;
	} catch (error) {
		throw new Error(`Couldn't find order #${id}`);
	}
}

export async function createOrder(newOrder) {
	try {
		const res = await fetch(`${API_URL}/order`, {
			method: "POST",
			body: JSON.stringify(newOrder),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) throw Error();
		const { data } = await res.json();
		return data;
	} catch {
		throw Error("Failed creating your order");
	}
}

export async function updateOrder(id, updateObj) {
	try {
		const response = await axios.post(`${API_URL}/order/${id}`, updateObj);

		if (!response.ok) throw Error();

		// We don't need the data, so we don't return anything
	} catch (err) {
		throw Error("Failed updating your order");
	}
}
