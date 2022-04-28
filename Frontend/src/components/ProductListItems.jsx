import styled from 'styled-components';
import React from 'react'

const Container = styled.div``

const ListItem = styled.li`
  padding: 7px;
  font-size: 16px;
  margin-right: 5px;
  cursor: pointer;
  border-bottom: ${props => props.active ? "2px solid blue" : "none"};
  font-weight: ${props => props.active ? 600 : 500};
`

const ProductListItems = ({ title, active, setSelected, id }) => {
    return (
        <Container>
            <ListItem active={active} onClick={() => setSelected(id)}>
                {title}
            </ListItem>
        </Container>
    )
}

export default ProductListItems;
