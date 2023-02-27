import {fixacao} from '../src/fixacao'

describe("Testar o arquivo fixacao.ts",()=>{
    test("recebe uma string como parâmetro e retorna um array de strings onde cada item é uma letra da palavra original",()=>{

        const result = fixacao("dev")
        const expectResult = ["d", "e", "v"]

        expect(result).toEqual(expectResult)
    })
})