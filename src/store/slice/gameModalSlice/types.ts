
interface PlayerOptionsModalType {
  id: number
  value: string
  status: boolean
}


interface GameModalSliceType {
  modalStatus: boolean
  playerOptionsModal: PlayerOptionsModalType[]
}

export type {GameModalSliceType, PlayerOptionsModalType}