import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';




import Header from '../../Components/Header/';
import Footer from '../../Components/Footer/';
import Filter from '../../Components/Filter/';
import styled from 'styled-components';
import TaskCard from '../../Components/TaskCard/Index';
import iconUtils from'../../utils/icons';



function Task(){

  const [type, setType] = useState();

    return(
      <Styled.Container>
         <Header />
            <Styled.Form>
            <Styled.Icons>
            
               {
                  iconUtils.map((icon, index) => (
                     index > 0 &&
                     <button type="button" onClick={() => setType(index)}>
                     <img src={icon} alt="Tarefa" className={type && type != index && 'off'} />
                     </button>

                  ))
               }
               </Styled.Icons>

               <Styled.Input>
                  <input type="text" placeholder="Título"></input>
               </Styled.Input>


          <Styled.TextArea>
              <input type="textarea" placeholder="Descrição" ></input>
          </Styled.TextArea>

          <Styled.Input>
              <input type="date" ></input>
          </Styled.Input>

          <Styled.Input>
              <input type="time" ></input>
          </Styled.Input>


            </Styled.Form>

        
         <Footer />
      </Styled.Container>

  
            
      
    )
}

export default Task;

