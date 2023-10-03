import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchOrder() {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!query) return;
		navigate(`/order/${query}`);
		setQuery("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search order #"
			/>
		</form>
	);
}
export default SearchOrder;
