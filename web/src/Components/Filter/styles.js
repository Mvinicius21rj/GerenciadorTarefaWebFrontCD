import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 50px;
    background: ${props =>props.activation ? '#FFD700' : '#0B173B' };
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;

    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);

    display flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: #FFFFFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 15px;
    }
    
    &:hover{
        background:#FFD700;
    }
`
