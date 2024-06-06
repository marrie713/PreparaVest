import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Disciplinas
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Matemática</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Física</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Química</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Biologia</Dropdown.Item>
      <Dropdown.Item href="#/action-5">Português</Dropdown.Item>
      <Dropdown.Item href="#/action-6">Geografia</Dropdown.Item>
      <Dropdown.Item href="#/action-7">História</Dropdown.Item>
      <Dropdown.Item href="#/action-8">Sociologia</Dropdown.Item>
      <Dropdown.Item href="#/action-9">Filosofia</Dropdown.Item>
      <Dropdown.Item href="#/action-10">Literatura</Dropdown.Item>
      <Dropdown.Item href="#/action-11">Inglês</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;


