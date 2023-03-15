import { Link } from "react-router-dom"

const UserPage = () => {


    return (
<div className="homee"> 
<label>USERRRR PAGEEEEEEE</label>

<Link to={"/sirovine"} > 
<div style={{  
    backgroundImage: "url(" + "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:1400
    ,height:200,
    textAlign:"center",color:"White",fontSize:35,
    paddingTop:120,
    margin:20
  }}>
                    Sirovine page
   
</div>
</Link>

<Link to={"/dobavljac"} > 
<div style={{  
   backgroundPosition: 'center',
   backgroundImage: "url(" + "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80" + ")", 
   backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:1400
    ,height:200,
    textAlign:"center",color:"White",fontSize:35,
    paddingTop:120,
    margin:20
  }}>
                    Dobavljaci page
   
</div>
</Link>

<Link to={"/proizvodi"} > 
<div style={{  
    backgroundImage: "url(" + "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:1400
    ,height:200,
    textAlign:"center",color:"White",fontSize:35,
    paddingTop:120,
    margin:20
  }}>
                    Proizvodi page
   
</div>
</Link>


</div>

    

    )
}

export default UserPage