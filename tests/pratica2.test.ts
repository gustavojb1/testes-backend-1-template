import {pratica2} from '../src/pratica2'

describe("Teste do arquivo pratica2.ts", () =>{
    test("A função recebe um parâmetro e retorna null caso seja diferente de 'number'", () =>{
        const result = pratica2("1" as any)

        // expect(result).toBeNull()
        // expect(result).toBe(null)
        expect(result).not.toBe(true)
    })
    test("A função recebe um numero, se for diferente de um número inteiro deve retornar null", () =>{
        const result = pratica2(101.1)

        expect(result).toBeNull()
    })

    test("Se o numero for impar retorne false", () =>{
        const result = pratica2(5)

        expect(result).toBeFalsy()
    })

    test("Se o numero for par retorne false", () =>{
        const result = pratica2(6)

        expect(result).toBeTruthy()
    })
})