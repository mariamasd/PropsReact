
function Profil(props){
    const stylename={ fontStyle: "italic",color: "crimson"}
    const stylebio={ fontSize: "32PX"}
    const styleprof={ fontSize: "42px",fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}
    return(
    <div>
<h1 style={stylename}> My FullName: {props.fullname}</h1>
  <p style={stylebio}>{props.bio} </p>
  <p style={styleprof}>{props.proffession}</p>
   <div> {props.children}</div>
  
    </div>
    );
  
}
export default Profil;