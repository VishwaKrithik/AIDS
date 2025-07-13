const GunList = (props) => {
    const masterGuns = props.masterGuns;
    const title = props.title;

    return ( 
        <div className="gun-list">
            <h2 style={{color: "black", padding: "10px", margin: "20px", fontSize: "30px", textTransform: "uppercase", borderBottom: "1.5px solid black", display: "inline-block"}}>{ title }</h2>
            {masterGuns.map((gun) => (
                <div className="gun-view" key={gun.id}>
                    <h2>{ gun.name }</h2>
                    <p>{ gun.gunName }</p>
                </div>
            ))}
        </div>
    );
}
 
export default GunList;