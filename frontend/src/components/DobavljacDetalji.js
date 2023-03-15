const DobavljacDetalji = ({ dobavljac }) => {

    return (
        <div className="dobavljac-details"
       
        style={{  
            backgroundImage: "url(" + "https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?w=2000" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width:1400
            ,height:300,
            textAlign:"center",color:"black",
            paddingTop:20,
            margin:20
          }}
        >

<h4 style={{color:"green"}}>{dobavljac.naziv}</h4>
      <p><strong>Pdv : </strong>{dobavljac.pdv} %</p>
      <p><strong>Jib: </strong>{dobavljac.jib} KM</p>
      <p><strong>Broj telefona: </strong>{dobavljac.broj_telefona}</p>
      <p><strong>Kontakt osoba: </strong>{dobavljac.kontakt_osoba}</p>
      <p><strong>Email adresa: </strong>{dobavljac.email_adresa}</p>
     
      </div>
    )
  }
  export default DobavljacDetalji