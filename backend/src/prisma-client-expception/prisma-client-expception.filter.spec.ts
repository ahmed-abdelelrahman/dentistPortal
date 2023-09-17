import { PrismaClientExpceptionFilter } from './prisma-client-expception.filter';

describe('PrismaClientExpceptionFilter', () => {
  it('should be defined', () => {
    expect(new PrismaClientExpceptionFilter()).toBeDefined();
  });
});
