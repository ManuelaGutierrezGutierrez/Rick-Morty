import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import ApiCall from "./components/ApiCall/Apicall";

const App = () => {
	return (
		<div className="app">
			<h1>Rick - Morty</h1>
			<ApiCall></ApiCall>
		</div>
	);
};

export default App;
