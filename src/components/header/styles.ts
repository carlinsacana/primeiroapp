import styled from "styled-components";



export const Container = styled.div `
    height: 90px;
    background-color: red;
    
`;

export const ListItem = styled.li<{active: boolean}> `
    list-style: none;
    color: ${(props) => props.active? '#fff' : '#333'};
`;