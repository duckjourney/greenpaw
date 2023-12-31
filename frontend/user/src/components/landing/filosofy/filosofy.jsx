import "./filosofy.css";
import { Fragment } from "react";

function Filosofy() {
  return (
    <Fragment>
      <p className="filosofy">
        Nuestra filosofía de innovación y sostenibilidad se refleja en el
        compromiso con las 4 R del reciclaje:
      </p>
      <div className="cards">
        <div className="card card1">
          <p>Reduce</p>
        </div>
        <div className="card card2">
          <p>Reutiliza</p>
        </div>
        <div className="card card3">
          <p>Recicla</p>
        </div>
        <div className="card card4">
          <p>Recupera</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Filosofy;
