import React from "react";
import { connect } from "react-redux";

const Jugadores = ({jugador                                                                                                                                                                                     }) => (
<section>
    <h2>Jugadores</h2>
<div className="contenedor-jugadores">
    <article>
        <img src="" alt="" />
        <h3></h3>
        <div>
        <button></button>
        <button></button>
        </div>
    </article>
</div>
</section>
)

const mapStateToProps =state =>({
    jugador: state.jugadores
})
export default connect(mapStateToProps,mapDispatchToProps)(Jugadores)