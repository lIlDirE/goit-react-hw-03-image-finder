import css from './Button.module.css'

const Button = () => {
    return (
        <button type="submit" className={css.SearchFormButton}>
        <span className="button-label">Search</span>
        </button>
    )
}

export default Button 