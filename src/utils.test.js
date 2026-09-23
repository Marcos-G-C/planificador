import { calcularPeso, formatearFecha } from './utils.js'
import { describe, it, expect } from 'vitest'

describe('formatear Fecha', () => {
  it('Formatea correctamente una fecha simple', () => {
    const fecha = new Date(2026, 8, 21, 14, 33)
    const resultado = formatearFecha(fecha)
    expect(resultado).toBe('21/09/2026 14:33')
  })
})

describe('calcular peso', () => {
  it('Calcular un peso a partir de unos minutos dados', () => {
    let peso = calcularPeso(5)
    expect(peso).toBe('Baja')
    peso = calcularPeso(27)
    expect(peso).toBe('Media')
    peso = calcularPeso(300)
    expect(peso).toBe('Alta')
  })
})
