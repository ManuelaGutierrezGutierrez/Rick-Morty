import ApiCall from "./components/ApiCall/Apicall";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
	return (
		<div className="app">
			<Header></Header>
			<ApiCall></ApiCall>
			<Footer></Footer>
		</div>
	);
};

export default App;
