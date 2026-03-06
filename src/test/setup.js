import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

beforeAll(() => {
  // Configuración global antes de ejecutar las pruebas
});

afterEach(() => {
  // Limpieza después de cada prueba
  cleanup();
});

afterAll(() => {
  // Limpieza global después de ejecutar todas las pruebas
});
