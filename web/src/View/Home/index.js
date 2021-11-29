import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';


import {Link} from 'react-router-dom'

import Header from '../../Components/Header/';
import Footer from '../../Components/Footer/';
import Filter from '../../Components/Filter/';
import styled from 'styled-components';
import TaskCard from '../../Components/TaskCard/Index';

/* Imagens */
import Img from '../../images/filter2.png';
import futebol from '../../images/CARDS/esporte.png';
import viagem from '../../images/CARDS/viagem.png';
import cinema from '../../images/CARDS/cinema.png';
import comida from '../../images/CARDS/refeicao.png';
import prova from '../../images/CARDS/livro.png';
import academia from '../../images/CARDS/academia.jpg';

import trabalho from '../../images/CARDS/trabalho.png';



function Home(){

  //Varial e função que atualiza o valor do filtro

  const [filterActive, functionFilter] = useState('all');

  // setTasks e a função que armazena a variavel tarks as tarefas retornadas do banco de dados
  const [tasks, setTasks] = useState([]);

  //responsavel por fazer as requisições para o backend
  async function loadTasks(){
    await api.get(`/task/filter/${filterActive}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data)
    })
  }

  useEffect(() => {
    loadTasks();
  }, [filterActive])

    return(
      <Styled.Container>
         <Header />

          <Styled.ContainerFilter>
            <button type='button' onClick={() => functionFilter('all')}>
            <Filter title="Todos" img={Img} actived={filterActive == 'all' } />
            </button>
            <button type='button' onClick={() => functionFilter('today')}>
            <Filter title="Hoje" img={Img} actived={filterActive == 'today' }/>
            </button>
            <button type='button' onClick={() => functionFilter('week')}>
            <Filter title="Semana" img={Img} actived={filterActive == 'week' } />
            </button>
            <button type='button' onClick={() => functionFilter('month')}>
            <Filter title="Mês" img={Img} actived={filterActive == 'month' } />
            </button>
                        
          </Styled.ContainerFilter>

          <Styled.ContainerCard>

          {
          tasks.map(
            t => (
              <Link to={`/task/${t._id}`}>
            <TaskCard  type={t.type} title={t.title} when={t.when} />
            </Link>
          ))
          }
          </Styled.ContainerCard>
        
         <Footer />
      </Styled.Container>

  
            
      
    )
}

export default Home;

