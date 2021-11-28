import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';
import { format } from 'date-fns';

import { useParams } from 'react-router-dom';

import { Navigate } from 'react-router';


import Header from '../../Components/Header/';
import Footer from '../../Components/Footer/';
import Filter from '../../Components/Filter/';
import styled from 'styled-components';
import TaskCard from '../../Components/TaskCard/Index';
import iconUtils from'../../utils/icons';



function Task(){

    const {id} = useParams();

    const [navigate, setNavigate] = useState(false);

    const [type, setType] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macAdress, setMacadress] = useState('11:11:11:11:11:11');

    async function save(){

        if(id){
            await api.put(`/task/${id}`, {
                macAdress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => setNavigate(true))
        } else {
            await api.post('/task', {
                macAdress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => setNavigate(true))
        }
           
       }
     async function loadTask(){
        await api.get(`/task/${id}`)
        .then( response => {
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
            setHour(format(new Date(response.data.when), 'HH:mm'))
        })
    }

    useEffect(() => {
        loadTask();
    }, [])

    async function deleteTask(){
        const res = window.confirm("Gostaria de remover esta tarefa?")
        if(res == true){
            await api.delete(`/task/${id}`)
            .then(setNavigate(true))
        }
    }
  

    return(
      <Styled.Container>
         {navigate && <Navigate to="/"></Navigate>}

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
              <input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} value={title}></input>
          </Styled.Input>

          <Styled.TextArea>
              <input type="textarea" placeholder="Descrição" onChange={e => setDescription(e.target.value)} value={description}></input>
          </Styled.TextArea>

          <Styled.Input>
              <input type="date" onChange={e => setDate(e.target.value)} value={date}></input>
          </Styled.Input>

          <Styled.Input>
              <input type="time" onChange={e => setHour(e.target.value)} value={hour}></input>
          </Styled.Input>


          <Styled.Option>
              <div>
                  <input type="checkbox" check={done} onChange={e => setDone(e.target.value)}></input>
                  <span>CONCLUÍDO</span>
              </div>
              {id && <button type="button" onClick={deleteTask}>EXCLUIR</button>}
          </Styled.Option>


          <Styled.Save>
              <button type="button" onClick={save}>SALVAR</button>
          </Styled.Save>


            </Styled.Form>

        
         <Footer />
      </Styled.Container>

  
            
      
    )
}

export default Task;

