import React from "react";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
const Contaniner = styled.div`
  display: flex;
  padding: 50px;
`;
const ContaninerImg = styled.div`
  flex: 1;
`;
const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const ContaninerInfo = styled.div`
  flex: 1;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.span``;
const Price = styled.span`
  display: block;
  font-weight: 100;
  font-size: 40px;
`;
const ContaninerInfoColor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Filter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const FilterTitle = styled.div`
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
`;
const FilterSizeOption = styled.div``;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Amount = styled.div`
  ${
    "" /* width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center; */
  }
  padding: 5px 10px;
  border: 1px solid teal;
  border-radius: 10px;
`;
const Button = styled.button`
border: 2px solid teal;
background-color: white;
cursor: pointer;
padding: 15px;
font-weight: 500;
`;
const ContaninerInfoAdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductId = () => {
  return (
    <Contaniner>
      <ContaninerImg>
        <Img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </ContaninerImg>
      <ContaninerInfo>
        <Title>Denim Jumpsuit</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
        </Desc>
        <Price>$ 20</Price>
        <ContaninerInfoColor>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </ContaninerInfoColor>
        <ContaninerInfoAdd>
          <AmountContainer>
            <Remove />
            <Amount>1</Amount>
            <Add />
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </ContaninerInfoAdd>
      </ContaninerInfo>
    </Contaniner>
  );
};

export default ProductId;
