import useForm from "../hooks/useForm"
import useSelect from "../hooks/useSelect"
import Field from "./Field"
import "./Button.css"

const Form = ({ worldCoins, submit }) => {
    const initial = {
        inAmount: "0",
        outAmount: "0",
    }

    const [coinIn, choiceIn, change1] = useSelect(worldCoins[0])
    const [coinOut, choiceOut, change2] = useSelect(worldCoins[1])
    const [form, handleChange, reset] = useForm(initial)


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
                onClick={()=>exChange()}
            >
                ⬆️ ⬇️
            </button>

            <Field
                name="outAmount"
                optionsCoin={worldCoins}
                labelField="Out: "
                coin={coinOut}
                choice={choiceOut}
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