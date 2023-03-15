const ProizvodiDetalji = ({ proizvod }) => {

    return (
        <div className="proizvidui-details"
        style={{  
          backgroundImage: "url(" + proizvod.slika_proizvoda + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:1400
          ,height:200,
          textAlign:"center",color:"black",
          paddingTop:20,
          margin:20
        }}
        >

<h4 >{proizvod.naziv}</h4>
      <p><strong>Cijena : </strong>{proizvod.cijena} KM</p>
      <p><strong>Marza: </strong>{proizvod.marza} </p>
     
      </div>
    )
  }
  export default ProizvodiDetalji