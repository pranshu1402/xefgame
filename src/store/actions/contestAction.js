

export const isModalOpen = (isModalOpen) => ({
    type: 'IS_MODAL_OPEN',
    isModalOpen,
  })

  export const addPrizeDist = (prizeMoneyDist) => ({
    type: 'ADD_PRIZE_DIST',
    prizeMoneyDist
  })

  export const addHotContest =(hotContests)=>({
    type: 'ADD_HOT_CONTESTS',
    hotContests
  })

  export const addMegaContest =(megaContest)=>({
    type: 'ADD_MEGA_CONTESTS',
    megaContest
  })

  export const addHeadContest =(headToHead)=>({
    type: 'ADD_HEAD_CONTESTS',
    headToHead
  })