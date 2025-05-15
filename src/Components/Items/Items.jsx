import './Items.css'
function Items(props) {
    return (
        <div className='dflex'>
            <img src={props.article.url} alt="" className='ptitimg' />
            <div>
                <p> {props.article.nom} x {props.article.quantite}  </p>
                <button onClick={() => props.rendre(props.article)}>Retourner</button>
            </div>

        </div>
    )
}
export default Items