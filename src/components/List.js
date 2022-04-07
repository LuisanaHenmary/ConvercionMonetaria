import "./List.css"

const List = ({ conversions }) => {
    return (
        <ul className='lista' >
            {conversions.map((cornv, i) =>
                <li key={i} >
                    {`${i + 1}º  ${cornv.inAmount} => ${cornv.outAmount}`}
                </li>
            )}
        </ul>
    )
}

export default List; 