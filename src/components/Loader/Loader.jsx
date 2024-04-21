import { Hourglass } from 'react-loader-spinner'
import css from './Loader.module.css'

export function Loader(){
    return (
        <div className={css.loader}>
        <Hourglass/>
        </div>
    )
}