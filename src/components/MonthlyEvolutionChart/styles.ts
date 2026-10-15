import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  min-width: 0;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 24px;
`;

export const ChartHeader = styled.div`
  margin-bottom: 24px;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
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
