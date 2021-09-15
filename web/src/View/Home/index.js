import React from 'react';
import * as Styled from './styles';
import Header from '../../Components/Header/';
import Footer from '../../Components/Footer/';
import Filter from '../../Components/Filter/';




function Home(){
    return(
      <Styled.Container>
         <Header />

          <Styled.ContainerFilter>
            <Filter title="Todos" />
            <Filter title="Hoje"/>
            <Filter title="Semana"/>
            <Filter title="Mês"/>
          </Styled.ContainerFilter>
        
         <Footer />
      </Styled.Container>

  
            
      
    )
}

export default Home;