export default function SearchResultsItem({name, email}){
    return(
        <div style={{
            backgroundColor: "#2f2c79", 
            marginTop:"1rem", 
            marginBottom:"1rem", 
            padding:10, 
            width: "100%"
        }}>
            <p style={{color:"#ffffff"}} >{name}</p>
            <p style={{color:"#ffffff"}} >{email}</p>
        </div>
    );
}