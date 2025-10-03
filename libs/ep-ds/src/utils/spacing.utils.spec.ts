import { processSpacingShorthand } from './spacing.utils';

describe('processSpacingShorthand', () => {
  const mockStyles = {
    'p-1': 'padding-1',
    'p-2': 'padding-2',
    'p-3': 'padding-3',
    'p-4': 'padding-4',
    'px-1': 'padding-x-1',
    'px-2': 'padding-x-2',
    'px-3': 'padding-x-3',
    'px-4': 'padding-x-4',
    'py-1': 'padding-y-1',
    'py-2': 'padding-y-2',
    'py-3': 'padding-y-3',
    'py-4': 'padding-y-4',
    'pt-1': 'padding-top-1',
    'pt-2': 'padding-top-2',
    'pt-3': 'padding-top-3',
    'pt-4': 'padding-top-4',
    'pr-1': 'padding-right-1',
    'pr-2': 'padding-right-2',
    'pr-3': 'padding-right-3',
    'pr-4': 'padding-right-4',
    'pb-1': 'padding-bottom-1',
    'pb-2': 'padding-bottom-2',
    'pb-3': 'padding-bottom-3',
    'pb-4': 'padding-bottom-4',
    'pl-1': 'padding-left-1',
    'pl-2': 'padding-left-2',
    'pl-3': 'padding-left-3',
    'pl-4': 'padding-left-4',
    'm-1': 'margin-1',
    'm-2': 'margin-2',
    'mx-1': 'margin-x-1',
    'mx-2': 'margin-x-2',
    'my-1': 'margin-y-1',
    'my-2': 'margin-y-2',
    'mt-1': 'margin-top-1',
    'mt-2': 'margin-top-2',
    'mr-1': 'margin-right-1',
    'mr-2': 'margin-right-2',
    'mb-1': 'margin-bottom-1',
    'mb-2': 'margin-bottom-2',
    'ml-1': 'margin-left-1',
    'ml-2': 'margin-left-2',
    'sm-p-1': 'sm-padding-1',
    'sm-p-2': 'sm-padding-2',
    'md-m-1': 'md-margin-1',
    'md-m-2': 'md-margin-2',
  };

  describe('quando value é undefined ou vazio', () => {
    it('deve retornar array vazio para undefined', () => {
      const result = processSpacingShorthand(undefined, 'p', mockStyles);
      expect(result).toEqual([]);
    });

    it('deve retornar array vazio para string vazia', () => {
      const result = processSpacingShorthand('', 'p', mockStyles);
      expect(result).toEqual([]);
    });

    it('deve retornar array vazio para string com apenas espaços', () => {
      const result = processSpacingShorthand('   ', 'p', mockStyles);
      expect(result).toEqual([]);
    });
  });

  describe('quando value tem 1 valor (todos os lados)', () => {
    it('deve aplicar padding em todos os lados', () => {
      const result = processSpacingShorthand('2', 'p', mockStyles);
      expect(result).toEqual(['padding-2']);
    });

    it('deve aplicar margin em todos os lados', () => {
      const result = processSpacingShorthand('1', 'm', mockStyles);
      expect(result).toEqual(['margin-1']);
    });

    it('deve funcionar com prefixos responsivos', () => {
      const result = processSpacingShorthand('1', 'sm-p', mockStyles);
      expect(result).toEqual(['sm-padding-1']);
    });

    it('deve ignorar classes que não existem no styles', () => {
      const result = processSpacingShorthand('999', 'p', mockStyles);
      expect(result).toEqual([]);
    });
  });

  describe('quando value tem 2 valores (vertical horizontal)', () => {
    it('deve aplicar padding vertical e horizontal', () => {
      const result = processSpacingShorthand('2 4', 'p', mockStyles);
      expect(result).toEqual(['padding-y-2', 'padding-x-4']);
    });

    it('deve funcionar com valores iguais', () => {
      const result = processSpacingShorthand('3 3', 'p', mockStyles);
      expect(result).toEqual(['padding-y-3', 'padding-x-3']);
    });

    it('deve ignorar classes que não existem', () => {
      const result = processSpacingShorthand('999 888', 'p', mockStyles);
      expect(result).toEqual([]);
    });

    it('deve incluir apenas classes que existem', () => {
      const result = processSpacingShorthand('2 999', 'p', mockStyles);
      expect(result).toEqual(['padding-y-2']);
    });
  });

  describe('quando value tem 3 valores (top horizontal bottom)', () => {
    it('deve aplicar padding top, horizontal e bottom', () => {
      const result = processSpacingShorthand('1 2 3', 'p', mockStyles);
      expect(result).toEqual([
        'padding-top-1',
        'padding-x-2',
        'padding-bottom-3',
      ]);
    });

    it('deve funcionar com valores repetidos', () => {
      const result = processSpacingShorthand('2 2 2', 'p', mockStyles);
      expect(result).toEqual([
        'padding-top-2',
        'padding-x-2',
        'padding-bottom-2',
      ]);
    });
  });

  describe('quando value tem 4 valores (top right bottom left)', () => {
    it('deve aplicar padding em todos os lados específicos', () => {
      const result = processSpacingShorthand('1 2 3 4', 'p', mockStyles);
      expect(result).toEqual([
        'padding-top-1',
        'padding-right-2',
        'padding-bottom-3',
        'padding-left-4',
      ]);
    });

    it('deve funcionar com margin', () => {
      const result = processSpacingShorthand('1 2 1 2', 'm', mockStyles);
      expect(result).toEqual([
        'margin-top-1',
        'margin-right-2',
        'margin-bottom-1',
        'margin-left-2',
      ]);
    });
  });

  describe('quando value tem mais de 4 valores', () => {
    it('deve ignorar valores extras', () => {
      const result = processSpacingShorthand('1 2 3 4 5 6', 'p', mockStyles);
      expect(result).toEqual([]);
    });
  });

  describe('tratamento de espaços em branco', () => {
    it('deve lidar com espaços extras entre valores', () => {
      const result = processSpacingShorthand('  1   2  ', 'p', mockStyles);
      expect(result).toEqual(['padding-y-1', 'padding-x-2']);
    });

    it('deve lidar com tabs e quebras de linha', () => {
      const result = processSpacingShorthand('1\t2\n3', 'p', mockStyles);
      expect(result).toEqual([
        'padding-top-1',
        'padding-x-2',
        'padding-bottom-3',
      ]);
    });
  });

  describe('diferentes prefixos', () => {
    it('deve funcionar com prefixos de margin responsivos', () => {
      const result = processSpacingShorthand('1', 'md-m', mockStyles);
      expect(result).toEqual(['md-margin-1']);
    });

    it('deve funcionar com prefixos complexos', () => {
      const result = processSpacingShorthand('2', 'sm-p', mockStyles);
      expect(result).toEqual(['sm-padding-2']);
    });
  });
});
