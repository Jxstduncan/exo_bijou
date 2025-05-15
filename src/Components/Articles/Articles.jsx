import './Articles.css'
function Articles(props) {

    return (
        <div>
            <div className={props.article.stock==1? 'orange': 'card' && props.article.stock==0?'red':'card'}>
                <img src={props.article.url} alt="" className="img" />
                <h3 id='name'> {props.article.nom} </h3>
                <p className='price'> Prix : {props.article.prix} </p>
                <p className='price'>Stock : {props.article.stock} {props.article.stock>1? 'Unités': 'Unité'} </p>
                {
                    props.budget >= props.article.prix && props.article.stock > 0 ? <button className='buy' onClick={() => props.acheter(props.article)} >Acheter </button> : ''
                }
            </div>
        </div>
    )
}
export default Articles