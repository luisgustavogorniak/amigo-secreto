import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
  test ('cada participante não sorteie o próprio nome', () => {

    const participantes = [
      'zé cleyto',
      'chico nilso',
      'josivaldo',
      'chicolaia',
      'eusébio',
      'tiaury'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })

  })
})