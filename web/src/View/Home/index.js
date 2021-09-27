import React, {useState} from 'react';
import * as Styled from './styles';
import Header from '../../Components/Header/';
import Footer from '../../Components/Footer/';
import Filter from '../../Components/Filter/';
import Img from '../../images/filter2.png';





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
        
         <Footer />
      </Styled.Container>

  
            
      
    )
}

export default Home;