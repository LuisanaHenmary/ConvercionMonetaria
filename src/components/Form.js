import axios from "axios";
import useForm from "../hooks/useForm"
import useSelect from "../hooks/useSelect"
import Field from "./Field"
import "./Button.css"
import { useCallback, useState, useEffect } from "react"

const Form = ({ worldCoins, submit }) => {
    const initial = {
        inAmount: "0",
        outAmount: "0",
    }

    const [coinIn, choiceIn, change1] = useSelect(worldCoins[0])
    const [coinOut, choiceOut, change2] = useSelect(worldCoins[1])
    const [form, handleChange, reset] = useForm(initial)
    const [conversion, setConversion] = useState(0)

    const currencyConversion = useCallback(async (query) => {
        const apiKeyCurr = process.env.REACT_APP_API_KEY_CURRCONV

        try {
            const responce = await axios.get(`https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${apiKeyCurr}`)
            const equivalence = responce.data[query]

            if (equivalence) {
                form.outAmount = parseFloat(form.inAmount) * equivalence
                setConversion(form.outAmount)
            } else {
                var err = new Error("It was not found " + query);
                console.log(err);
            }
        } catch (error) {
            console.log(error)
        }
    }, [form])

    useEffect(() => {
        const query = coinIn + '_' + coinOut;
        currencyConversion(query)
    }, [coinIn, coinOut, currencyConversion])


    const exChange = () => {
        const vessel = coinIn
        change1(coinOut)
        change2(vessel)
    }

    const handleSumit = (e) => {
        e.preventDefault()
        submit(form)
        reset()
    }


    return (
        <form onSubmit={handleSumit}>
            <Field
                type="input"
                name="inAmount"
                optionsCoin={worldCoins}
                labelField="In: "
                coin={coinIn}
                choice={choiceIn}
                onChange={handleChange}
                value={form.inAmount}
            />

            <button
                type="button"
                className="exchange"
                onClick={() => exChange()}
            >
                ⬆️ ⬇️
            </button>

            <Field
                name="outAmount"
                optionsCoin={worldCoins}
                labelField="Out: "
                coin={coinOut}
                choice={choiceOut}
                value={conversion}
                disabled
            />
            <button
                type="submit"
                className="submit"
            >
                Ready
            </button>
        </form>

    )

}

export default Form