const PetArticle = ({image, title, message}) => {
    return(
        <div className="pet-article">
            <div className="article-image">
                <img src={image} alt=""/>
            </div>
            <div className="article-info">
                <div className="article-title">{title}</div>
                <div className="article-description">{message}</div>
                <div className="article-post-date">MAY 1, 2024</div>
            </div>
        </div>
    );
}
export default PetArticle;