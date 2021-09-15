import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 50px;
    background:#000000;
    padding: 5px
    cursor: pointer;
    border-radius: 5px;

    display flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 15px;
    }
    
    &:hover{
        background:#FFD700;
    }
`
