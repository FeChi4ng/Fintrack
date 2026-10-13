import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  min-width: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
`;

export const ChartHeader = styled.div`
  margin-bottom: 24px;

  h2 {
    color: #111827;
    font-size: 18px;
    font-weight: 600;
  }

  p {
    color: #6b7280;
    font-size: 13px;
    margin-top: 4px;
  }
`;

export const ChartContent = styled.div`
  width: 100%;
  height: 320px;

  @media (max-width: 650px) {
    height: 260px;
  }
`;
