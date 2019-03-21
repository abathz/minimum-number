import { serializeValue } from '../src/utils'

describe('Valid input', () => {
  test.each`
    input | convertedInput | expectedResult
    ${18.215} | ${18215} | ${true}
    ${'Rp17500'} | ${17500} | ${true}
    ${'Rp17.500,00'} | ${17500} | ${true}
    ${'Rp 120.325'} | ${120325} | ${true}
    ${'005.000'} | ${5000} | ${true}
    ${'001000'} | ${1000} | ${true}
  `('$input converted to $convertedInput', ({ input, expectedResult }) => {
    expect(Array.isArray(serializeValue(input))).toBe(expectedResult)
  })
})

describe('Invalid input', () => {
  test.each`
    input     | expectedResult | specifiedError
    ${'17,500'} | ${'Input invalid!'} | ${'invalid separator'}
    ${'2 500'} | ${'Input invalid!'} | ${'invalid separator'}
    ${'3000 Rp'} | ${'Input invalid!'} | ${'valid character in wrong position'}
    ${'Rp'} | ${'Input invalid!'} | ${'missing value'}
  `('$input is has error message: $expectedResult ($specifiedError)', ({ input, expectedResult }) => {
    expect(serializeValue(input)).toBe(expectedResult)
  })
})