import styled from "styled-components";

export const DashboardContainer = styled.div`
  margin-top: 20px;
`;

export const ChartContainer = styled.div`
  margin-top: 20px;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartTooltip = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
  text-align: center;
  
  & > h2 {
    color: ${({ theme }) => theme.colors.dark};
  }

`;