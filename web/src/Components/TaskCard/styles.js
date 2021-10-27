import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 150px;

    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    

    border-radius: 10px;

    background: #0B2161;   
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin: 25px;
`


export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 70px;
        height: 70px;
    }
    h3{
        color:#FFFFFF;
    }

`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong{
        color: #FFD700;
    }

    span{
        color:#FFFFFF;
    }

`