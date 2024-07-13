import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../contexto/GlobalContext";
import Label from "../EditCard/LabelCard";

const DivEstilizado = styled.div`
  margin-top: 43px;
  background-color: transparent;
`;

const SelectEstilizado = styled.select`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  padding: 16px 10px;
  border: 2px solid ;
  border-color: ${props => props.$vacio ? 'red' : '#2271d1'};
  background-color: transparent;
  color: #fff;
  font-size: 20px;

  &::placeholder {
    color: #a5a5a5;
    font-size: 20px;
  }
`;

const Opcion = styled.option`
  border-radius: 15px;
  border: 2px solid #2271d1;
  background-color: #03122F;
  color: #fff;
  font-size: 20px;
`;

const SelectNuevoVideo = ({vacio, setVacio}) => {

  const {categorias, nuevoCategoria, setNuevoCategoria} = useContext(GlobalContext)

    const manejarOnChange = (e) => {
        e.preventDefault()

        if(e.target.value === ""){
          setVacio(!vacio)
      }

        setNuevoCategoria(e.target.value)

    }

  return (
    <DivEstilizado>
      <Label vacio={vacio}>Categoria</Label>
      <SelectEstilizado $vacio={vacio} value={nuevoCategoria} onChange={manejarOnChange} >
      <Opcion value=""  hidden>Seleccione una categoria</Opcion>
        {categorias.map( ( categoria ) => <Opcion key={categoria.id}>{categoria.nombre}</Opcion>
             )
        }
      </SelectEstilizado>
    </DivEstilizado>
  );
};

export default SelectNuevoVideo;