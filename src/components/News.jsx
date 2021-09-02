import { useParams } from "react-router-dom";
import newsData from "../data/newsdata.json";

export default function NewsPage(props) {
  //

  const { newsId } = useParams();

  /* return `${newsId} news ${newsData.articles[newsId].title}`;*/
  return (
    <>
      <h2>{newsData.articles[newsId].title}</h2>
      <p>{newsData.articles[newsId].description}</p>
      <img
        src={newsData.articles[newsId].urlToImage}
        className="img-fluid"
        alt={newsData.articles[newsId].description}
      />
      <p>Publicado: {newsData.articles[newsId].publishedAt}</p>
    </>
  );
}
