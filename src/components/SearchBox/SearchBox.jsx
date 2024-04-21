import css from "./SearchBox.module.css"
import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice"

function SearchBox(){
const dispatch = useDispatch()

return (
    <div className={css.SearchBox}>
    <label className={css.label} htmlFor="input">Find contacts by name</label>  
        <input className={css.input} onChange={(e) =>dispatch(changeFilter(e.target.value))} type="text" id="input" placeholder="Please enter the name"/>
     
    </div>
)
}

export default SearchBox