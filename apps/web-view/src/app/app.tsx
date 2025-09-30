import { EpGrid, EpPaper, EpTypography } from '@epikouros/ep-ds';

export function App() {
  return (
    <div style={{ padding: '32px' }}>
      <EpGrid cols={1} gap="4">
        <EpPaper padding="4" elevation={2}>
          <EpTypography variant="heading-1" style={{ marginBottom: '16px' }}>
            Web View Application
          </EpTypography>
          <EpTypography variant="body-large">
            Esta é a aplicação web-view do projeto Epikouros.
          </EpTypography>
        </EpPaper>
      </EpGrid>
    </div>
  );
}

export default App;
