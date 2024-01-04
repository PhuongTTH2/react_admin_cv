import React from "react";
import styled from "styled-components";

const Contaniner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1``;
const ContaninerInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterText = styled.span`
  font-weight: 500;
`;
const Filter = styled.div``;
const Select = styled.select`
  margin: 0 10px;
  padding: 5px 10px;
`;
const Option = styled.option``;
const ProductsList = () => {
  return (
    <Contaniner>
      <Title>Dresses</Title>
      <ContaninerInfo>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </ContaninerInfo>
    </Contaniner>
  );
};

export default ProductsList;
