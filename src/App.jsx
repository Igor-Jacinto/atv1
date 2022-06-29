import Container from "./Container";

function App(){

	const conteiner = [
		{
			title: "PREVIOUS",
			subtitle: "jQUERY: DELECT UPDATE OF HTML ELEMENT",
		},
		{
			title: "NEXT",
			subtitle: "RAILS + DEVISE WORKING WITH MULTIPLE MODELS",
		},
	];

	return(

		<div className="cont"> 
			{
			conteiner.map((cons, cont) => {
					return <Container key={cont}
							title={cons.title}
							subtitle={cons.subtitle}
						/>;
				})
			}
	  </div>
	);
}

export default App;
