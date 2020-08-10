import React, {useState, useEffect} from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { ControlPresupuesto } from './components/ControlPresupuesto';

function App() {
  //Definir el state
  const [presupuesto, setPresupuesto] = useState();
  const [restante, setRestante] = useState(0);
  const [mostrarPresupuesto, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() =>{
    if(crearGasto){

      //Agrega el nuevo presupuesto
      setGastos([
        ...gastos, gasto
      ])
      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante)
      setCrearGasto(false)
    }
  }, [gasto, gastos, crearGasto, restante ])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          { mostrarPresupuesto? ( <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostrarPregunta={setMostrarPregunta}
          /> ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
              </div>
          </div>
          )}
          
        </div>
      </header>
    </div>
  );
}

export default App;
