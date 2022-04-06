import { useState } from 'react'

const useSelect = (initialValues) => {

  const [coin, setCoin] = useState(initialValues)

  const choice = (e) => {

    setCoin(e.target.value)

  }

  const selectChange = (ele) => {

    setCoin(ele)

  }
  
  return [coin, choice,selectChange]

}

export default useSelect;