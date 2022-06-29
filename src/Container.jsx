import "./Container.css";

function Container({title, subtitle}){
	
	return( 
        <button className="principal">
		<div>
		<h3 className='titulo'>{title}</h3> 
		<p className='subtitulo'>{subtitle}</p>
		 </div>
         </button>
	);
}

export default Container;
