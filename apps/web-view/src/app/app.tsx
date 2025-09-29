// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { EpPaper, EpTypography } from '@epikouros/ep-ds';

export function App() {
  return (
    <div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
          <li>
            <Link to="/paper-demo">Paper Demo</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
        <Route
          path="/paper-demo"
          element={
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
              <EpTypography variant="heading-1" style={{ marginBottom: '20px' }}>
                Demonstração do Componente Paper
              </EpTypography>
              
              <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                
                {/* Variantes de Surface */}
                <div>
                  <EpTypography variant="heading-3" style={{ marginBottom: '10px' }}>
                    Variantes de Surface
                  </EpTypography>
                  <EpPaper variant="surface-0" style={{ marginBottom: '10px' }}>
                    <EpTypography>Surface 0 - Mais escuro</EpTypography>
                  </EpPaper>
                  <EpPaper variant="surface-1" style={{ marginBottom: '10px' }}>
                    <EpTypography>Surface 1 - Padrão</EpTypography>
                  </EpPaper>
                  <EpPaper variant="surface-2" style={{ marginBottom: '10px' }}>
                    <EpTypography>Surface 2</EpTypography>
                  </EpPaper>
                  <EpPaper variant="surface-3" style={{ marginBottom: '10px' }}>
                    <EpTypography>Surface 3</EpTypography>
                  </EpPaper>
                  <EpPaper variant="surface-4">
                    <EpTypography>Surface 4 - Mais claro</EpTypography>
                  </EpPaper>
                </div>

                {/* Variantes de Cor */}
                <div>
                  <EpTypography variant="heading-3" style={{ marginBottom: '10px' }}>
                    Variantes de Cor
                  </EpTypography>
                  <EpPaper variant="primary" style={{ marginBottom: '10px' }}>
                    <EpTypography>Paper Primary</EpTypography>
                  </EpPaper>
                  <EpPaper variant="secondary">
                    <EpTypography>Paper Secondary</EpTypography>
                  </EpPaper>
                </div>

                {/* Bordas */}
                <div>
                  <EpTypography variant="heading-3" style={{ marginBottom: '10px' }}>
                    Variantes de Borda
                  </EpTypography>
                  <EpPaper border="none" style={{ marginBottom: '10px' }}>
                    <EpTypography>Sem borda</EpTypography>
                  </EpPaper>
                  <EpPaper border="1" style={{ marginBottom: '10px' }}>
                    <EpTypography>Borda 1</EpTypography>
                  </EpPaper>
                  <EpPaper border="2" style={{ marginBottom: '10px' }}>
                    <EpTypography>Borda 2</EpTypography>
                  </EpPaper>
                  <EpPaper border="3" style={{ marginBottom: '10px' }}>
                    <EpTypography>Borda 3</EpTypography>
                  </EpPaper>
                  <EpPaper border="primary" style={{ marginBottom: '10px' }}>
                    <EpTypography>Borda Primary</EpTypography>
                  </EpPaper>
                  <EpPaper border="secondary">
                    <EpTypography>Borda Secondary</EpTypography>
                  </EpPaper>
                </div>

                {/* Border Radius */}
                <div>
                  <EpTypography variant="heading-3" style={{ marginBottom: '10px' }}>
                    Border Radius
                  </EpTypography>
                  <EpPaper borderRadius="none" style={{ marginBottom: '10px' }}>
                    <EpTypography>Sem border radius</EpTypography>
                  </EpPaper>
                  <EpPaper borderRadius="1" style={{ marginBottom: '10px' }}>
                    <EpTypography>Border radius 1</EpTypography>
                  </EpPaper>
                  <EpPaper borderRadius="2">
                    <EpTypography>Border radius 2</EpTypography>
                  </EpPaper>
                </div>

                {/* Elevação */}
                <div>
                  <EpTypography variant="heading-3" style={{ marginBottom: '10px' }}>
                    Elevação (Sombras)
                  </EpTypography>
                  <EpPaper elevation={0} style={{ marginBottom: '10px' }}>
                    <EpTypography>Elevação 0</EpTypography>
                  </EpPaper>
                  <EpPaper elevation={1} style={{ marginBottom: '10px' }}>
                    <EpTypography>Elevação 1</EpTypography>
                  </EpPaper>
                  <EpPaper elevation={2} style={{ marginBottom: '10px' }}>
                    <EpTypography>Elevação 2</EpTypography>
                  </EpPaper>
                  <EpPaper elevation={3} style={{ marginBottom: '10px' }}>
                    <EpTypography>Elevação 3</EpTypography>
                  </EpPaper>
                  <EpPaper elevation={4}>
                    <EpTypography>Elevação 4</EpTypography>
                  </EpPaper>
                </div>

                {/* Interativo */}
                <div>
                  <EpTypography variant="heading-3" style={{ marginBottom: '10px' }}>
                    Paper Interativo
                  </EpTypography>
                  <EpPaper interactive elevation={2} style={{ marginBottom: '10px' }}>
                    <EpTypography>Passe o mouse aqui - Efeito hover</EpTypography>
                  </EpPaper>
                  <EpPaper interactive variant="primary" elevation={1}>
                    <EpTypography>Paper Primary Interativo</EpTypography>
                  </EpPaper>
                </div>

                {/* Padding */}
                <div>
                  <EpTypography variant="heading-3" style={{ marginBottom: '10px' }}>
                    Variantes de Padding
                  </EpTypography>
                  <EpPaper padding="1" style={{ marginBottom: '10px' }}>
                    <EpTypography>Padding 1</EpTypography>
                  </EpPaper>
                  <EpPaper padding="2" style={{ marginBottom: '10px' }}>
                    <EpTypography>Padding 2 (padrão)</EpTypography>
                  </EpPaper>
                  <EpPaper padding="3" style={{ marginBottom: '10px' }}>
                    <EpTypography>Padding 3</EpTypography>
                  </EpPaper>
                  <EpPaper padding="4">
                    <EpTypography>Padding 4</EpTypography>
                  </EpPaper>
                </div>

                {/* Combinações */}
                <div>
                  <EpTypography variant="heading-3" style={{ marginBottom: '10px' }}>
                    Combinações
                  </EpTypography>
                  <EpPaper 
                    variant="primary" 
                    border="2" 
                    borderRadius="2" 
                    elevation={3} 
                    padding="3"
                    interactive
                    style={{ marginBottom: '10px' }}
                  >
                    <EpTypography variant="heading-4">Card Completo</EpTypography>
                    <EpTypography>
                      Primary + Borda 2 + Radius 2 + Elevação 3 + Padding 3 + Interativo
                    </EpTypography>
                  </EpPaper>
                  
                  <EpPaper 
                    variant="surface-2" 
                    border="primary" 
                    borderRadius="1" 
                    elevation={1} 
                    padding="2"
                  >
                    <EpTypography variant="heading-4">Card Simples</EpTypography>
                    <EpTypography>
                      Surface 2 + Borda Primary + Radius 1 + Elevação 1
                    </EpTypography>
                  </EpPaper>
                </div>

              </div>


              
              <div style={{ marginTop: '40px' }}>
                <Link to="/">← Voltar para Home</Link>
              </div>
            </div>
          }
        />

      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
