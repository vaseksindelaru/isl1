import React from "react";
import { connect } from "react-redux";

const Jugadores = ({jugador}) => (
<section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
        {jugador.map(j=>(
        <article className="jugador">
        <img src="j.foto" alt="j.nombre" />
        <h3>{j.nombre}</h3>
        <div>
        <button>Titular</button>
        <button>Suplente</button>
        </div>
       </article>))}
       
</div>
</section>
)
const mapStateToProps = state =>({
    jugador: state.jugadores
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps)(Jugadores)