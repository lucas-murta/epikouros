import { buildGridClasses } from './grid.utils';

// Mock dos estilos CSS modules
const mockStyles: Record<string, string> = {
  grid: 'grid-class',
  // Colunas
  'cols-1': 'cols-1-class',
  'cols-2': 'cols-2-class',
  'cols-3': 'cols-3-class',
  'cols-4': 'cols-4-class',
  // Gaps
  'gap-2': 'gap-2-class',
  'gap-4': 'gap-4-class',
  'gap-x-2': 'gap-x-2-class',
  'gap-y-4': 'gap-y-4-class',
  // Colunas responsivas
  'sm-cols-2': 'sm-cols-2-class',
  'sm-cols-3': 'sm-cols-3-class',
  'md-cols-3': 'md-cols-3-class',
  'lg-cols-4': 'lg-cols-4-class',
  // Padding classes
  'p-2': 'p-2-class',
  'p-4': 'p-4-class',
  'px-2': 'px-2-class',
  'px-4': 'px-4-class',
  'py-2': 'py-2-class',
  'py-4': 'py-4-class',
  'pt-1': 'pt-1-class',
  'pr-2': 'pr-2-class',
  'pb-3': 'pb-3-class',
  'pl-4': 'pl-4-class',
  'sm-p-2': 'sm-p-2-class',
  'md-p-4': 'md-p-4-class',
  'lg-p-6': 'lg-p-6-class',
  // Margin classes
  'm-2': 'm-2-class',
  'm-4': 'm-4-class',
  'mx-2': 'mx-2-class',
  'mx-4': 'mx-4-class',
  'my-2': 'my-2-class',
  'my-4': 'my-4-class',
  'mt-1': 'mt-1-class',
  'mr-2': 'mr-2-class',
  'mb-3': 'mb-3-class',
  'ml-4': 'ml-4-class',
  'sm-m-2': 'sm-m-2-class',
  'md-m-4': 'md-m-4-class',
  'lg-m-6': 'lg-m-6-class',
};

describe('buildGridClasses', () => {
  it('deve retornar classes básicas com valores padrão', () => {
    const result = buildGridClasses({}, mockStyles);
    expect(result).toBe('grid-class cols-1-class');
  });

  it('deve aplicar número de colunas personalizado', () => {
    const result = buildGridClasses({ cols: 3 }, mockStyles);
    expect(result).toBe('grid-class cols-3-class');
  });

  it('deve aplicar gap quando fornecido', () => {
    const result = buildGridClasses({ gap: 4 }, mockStyles);
    expect(result).toBe('grid-class cols-1-class gap-4-class');
  });

  it('deve aplicar gapX e gapY quando fornecidos', () => {
    const result = buildGridClasses({ gapX: 2, gapY: 4 }, mockStyles);
    expect(result).toBe('grid-class cols-1-class gap-x-2-class gap-y-4-class');
  });

  it('deve aplicar colunas responsivas', () => {
    const result = buildGridClasses(
      {
        cols: 1,
        smCols: 2,
        mdCols: 3,
        lgCols: 4,
      },
      mockStyles
    );
    expect(result).toBe(
      'grid-class cols-1-class sm-cols-2-class md-cols-3-class lg-cols-4-class'
    );
  });

  it('deve processar padding com valor único', () => {
    const result = buildGridClasses({ padding: '2' }, mockStyles);
    expect(result).toBe('grid-class cols-1-class p-2-class');
  });

  it('deve processar padding com valores múltiplos (shorthand)', () => {
    const result = buildGridClasses({ padding: '2 4' }, mockStyles);
    expect(result).toBe('grid-class cols-1-class py-2-class px-4-class');
  });

  it('deve processar padding com 4 valores (shorthand completo)', () => {
    const result = buildGridClasses({ padding: '1 2 3 4' }, mockStyles);
    expect(result).toBe(
      'grid-class cols-1-class pt-1-class pr-2-class pb-3-class pl-4-class'
    );
  });

  it('deve processar margin com valor único', () => {
    const result = buildGridClasses({ margin: '2' }, mockStyles);
    expect(result).toBe('grid-class cols-1-class m-2-class');
  });

  it('deve processar margin com valores múltiplos (shorthand)', () => {
    const result = buildGridClasses({ margin: '2 4' }, mockStyles);
    expect(result).toBe('grid-class cols-1-class my-2-class mx-4-class');
  });

  it('deve processar padding e margin responsivos', () => {
    const result = buildGridClasses(
      {
        smPadding: '2',
        mdPadding: '4',
        lgPadding: '6',
        smMargin: '2',
        mdMargin: '4',
        lgMargin: '6',
      },
      mockStyles
    );
    expect(result).toBe(
      'grid-class cols-1-class sm-p-2-class md-p-4-class lg-p-6-class sm-m-2-class md-m-4-class lg-m-6-class'
    );
  });

  it('deve incluir className personalizada', () => {
    const result = buildGridClasses({ className: 'custom-class' }, mockStyles);
    expect(result).toBe('grid-class cols-1-class custom-class');
  });

  it('deve combinar todas as propriedades', () => {
    const result = buildGridClasses(
      {
        cols: 2,
        gap: 4,
        smCols: 3,
        padding: '2',
        margin: '4',
        className: 'custom-class',
      },
      mockStyles
    );
    expect(result).toBe(
      'grid-class cols-2-class gap-4-class sm-cols-3-class p-2-class m-4-class custom-class'
    );
  });

  it('deve ignorar valores undefined', () => {
    const result = buildGridClasses(
      {
        cols: 1,
        gap: undefined,
        gapX: undefined,
        gapY: undefined,
        smCols: undefined,
        padding: undefined,
        margin: undefined,
      },
      mockStyles
    );
    expect(result).toBe('grid-class cols-1-class');
  });

  it('deve filtrar classes inexistentes no styles', () => {
    const limitedStyles = {
      grid: 'grid-class',
      'cols-1': 'cols-1-class',
    };

    const result = buildGridClasses(
      {
        cols: 1,
        className: 'custom-class',
      },
      limitedStyles
    );

    expect(result).toBe('grid-class cols-1-class custom-class');
  });

  it('deve lidar com strings vazias', () => {
    const result = buildGridClasses(
      {
        padding: '',
        margin: '',
        className: '',
      },
      mockStyles
    );
    expect(result).toBe('grid-class cols-1-class');
  });

  it('deve processar múltiplas propriedades responsivas simultaneamente', () => {
    const result = buildGridClasses(
      {
        cols: 1,
        smCols: 2,
        mdCols: 3,
        lgCols: 4,
        padding: '2',
        smPadding: '2',
        mdPadding: '4',
        lgPadding: '6',
        margin: '2',
        smMargin: '2',
        mdMargin: '4',
        lgMargin: '6',
        gap: 2,
        gapX: 2,
        gapY: 4,
      },
      mockStyles
    );

    const expectedClasses = [
      'grid-class',
      'cols-1-class',
      'gap-2-class',
      'gap-x-2-class',
      'gap-y-4-class',
      'sm-cols-2-class',
      'md-cols-3-class',
      'lg-cols-4-class',
      'p-2-class',
      'sm-p-2-class',
      'md-p-4-class',
      'lg-p-6-class',
      'm-2-class',
      'sm-m-2-class',
      'md-m-4-class',
      'lg-m-6-class',
    ].join(' ');

    expect(result).toBe(expectedClasses);
  });
});
