import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { apiConfig } from '../../utils/api';

function BasicExample({funcao}) {

  const [materias, setMaterias] = useState('')

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Disciplinas
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {materias.map((materia, i)=>{
        return <Dropdown.Item href={`#/action-${i}`}>{materia}</Dropdown.Item>
      })}

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


