import styled from "styled-components";

export const ChartContainer = styled.section`
  padding: 24px;

  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

export const ChartHeader = styled.div`
  margin-bottom: 24px;

  h2 {
    color: #111827;
    font-size: 18px;
  }

  p {
    margin-top: 4px;

    color: #9ca3af;
    font-size: 13px;
  }
`;

export const ChartContent = styled.div`
  width: 100%;
  height: 300px;
`;
