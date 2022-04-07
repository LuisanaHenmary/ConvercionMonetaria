import "./App.css"
import axios from "axios"
import { useState,useCallback, useEffect } from "react"
import Form from "./components/Form"
import List from "./components/List"

const App = () => {


  const [coins, setCoins] = useState([])
  const [conversions, setConversions] = useState([])

  const loadSymbols = useCallback(async () => {
    const apiKey = process.env.REACT_APP_API_KEY_FIXER

    try {
      const resp = await axios.get(`http://data.fixer.io/api/symbols?access_key=${apiKey}`)
      setCoins(Object.keys(resp.data.symbols))
    } catch (e) {
      console.log(e)
    }
  }, [setCoins])

  useEffect(() => {
    loadSymbols()
  }, [loadSymbols])


  const submitFunction = conversion => {
    setConversions([
      ...conversions,
      conversion
    ])
  }

  return (
    <div style={{ marginTop: '15%' }}>
      <div className="container">
        {
          coins.length !== 0 ?
            <Form
              worldCoins={coins}
              submit={submitFunction}
            /> : <div className="errorMessage" >
              You have not loaded the symbols
            </div>
        }
        {
          conversions.length !== 0 ?
            <List conversions={conversions} /> : null
        }
      </div>
    </div>
  )
}

export default App;
