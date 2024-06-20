import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pressable, Text } from 'react-native';

function BasicExample({funcao}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Disciplinas
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {/* {materias.map((materia, i)=>{
        return <Dropdown.Item href={`#/action-${i}`}>{materia}</Dropdown.Item>
      })} */}
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('matemática')}><Text>Matemática</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('física')}><Text>Física</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('química')}><Text>Química</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('biologia')}><Text>Biologia</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('português')}><Text>Português</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('geografia')}><Text>Geografia</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('história')}><Text>História</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('sociologia')}><Text>Sociologia</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('filosofia')}><Text>Filosofia</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('literatura')}><Text>Literatura</Text></Pressable></Dropdown.Item>
      <Dropdown.Item as="button"><Pressable onPress={()=> funcao('inglês')}><Text>Inglês</Text></Pressable></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;


