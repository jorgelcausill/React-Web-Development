
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Ingredient({props,show, handleClose}) {

    const obtenerIngredientes = () => {
        const filas = [];
      
        for (let i = 1; i <= 15; i++) {
            const nombreIngrediente= `strIngredient${i}`;
            const nombreMedida= `strMeasure${i}`;
            const ingrediente = props.props[nombreIngrediente];
            const medida = props.props[nombreMedida];
            if(ingrediente != null || medida != null){
                filas.push(
                    <tr key={i}>
                      <th scope="row">{i}</th>
                      <td>{ingrediente}</td>
                      <td>{medida}</td>
                    </tr>
                );
            };
        }
      
        return filas;
      };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {obtenerIngredientes()}
                </tbody>
            </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Ingredient;
