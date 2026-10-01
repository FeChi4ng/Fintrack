import styled from "styled-components";

export const ChartContainer = styled.section`
  padding: 24px;

  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

export const ChartHeader = styled.div`
  margin-bottom: 16px;

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
  height: 240px;
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LegendItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;

  font-size: 13px;

  span {
    color: #6b7280;
  }

  strong {
    color: #374151;
    font-weight: 600;
  }
`;

type LegendColorProps = {
  $color: string;
};

export const LegendColor = styled.span<LegendColorProps>`
  width: 10px;
  height: 10px;

  display: block;

  border-radius: 50%;
  background: ${({ $color }) => $color};
`;
