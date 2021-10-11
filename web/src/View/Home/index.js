import React, {useState} from 'react';
import * as Styled from './styles';
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
import lanche from '../../images/CARDS/lanche.jpg';
import prova from '../../images/CARDS/prova.jpg';
import academia from '../../images/CARDS/academia.jpg';
import compra from '../../images/CARDS/compra.jpg';
import trabalho from '../../images/CARDS/trabalho.png';


function Home(){

  const [filterActive, functionFilter] = useState();

    return(
      <Styled.Container>
         <Header />

          <Styled.ContainerFilter>
            <button type='button' onClick={() => functionFilter('todos')}>
            <Filter title="Todos" img={Img} actived={filterActive == 'todos' } />
            </button>
            <button type='button' onClick={() => functionFilter('hoje')}>
            <Filter title="Hoje" img={Img} actived={filterActive == 'hoje' }/>
            </button>
            <button type='button' onClick={() => functionFilter('semana')}>
            <Filter title="Semana" img={Img} actived={filterActive == 'semana' } />
            </button>
            <button type='button' onClick={() => functionFilter('mes')}>
            <Filter title="Mês" img={Img} actived={filterActive == 'mes' } />
            </button>
                        
          </Styled.ContainerFilter>

          <Styled.ContainerCard>
            <TaskCard img={futebol} title="Futebol"/>
            <TaskCard img={viagem} title="Viagem"/>
            <TaskCard img={academia} title="Academia"/>
            <TaskCard img={lanche} title="Lanche"/>
            <TaskCard img={prova} title="Prova"/>
            <TaskCard img={trabalho} title="Trabalho"/>
            <TaskCard img={cinema} title="Cinema"/>
            <TaskCard img={compra} title="Compra"/>
          </Styled.ContainerCard>
        
         <Footer />
      </Styled.Container>

  
            
      
    )
}

export default Home;