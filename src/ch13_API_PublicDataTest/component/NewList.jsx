import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../model/NewsItem";
import axios from "axios";
import PublicItem from "../model/PublicItem";
import PublicItem2 from "../model/PublicItem2";

const NewListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewList = ({ category }) => {
  const [articles, setArticles] = useState(null);

  const [loading, setLoading] = useState(false);

  const [datatype, setDatatype] = useState(0);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);

      try {
        const query = category === "all" ? "" : `&category=${category}`;

        switch (query) {
          case "":
            const response = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response.data.articles);

            setDatatype(0);
            break;
          case "&category=business":
            const response_business = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_business.data.articles);

            setDatatype(0);
            break;
          case "&category=entertainment":
            const response_entertainment = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_entertainment.data.articles);

            setDatatype(0);
            break;
          case "&category=health":
            const response_health = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_health.data.articles);

            setDatatype(0);
            break;
          case "&category=science":
            const response_science = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_science.data.articles);

            setDatatype(0);
            break;
          case "&category=sports":
            const response_sports = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_sports.data.articles);

            setDatatype(0);
            break;
          case "&category=technology":
            const response_technology = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_technology.data.articles);

            setDatatype(0);
            break;
          case "&category=busanFood":
            const response3 = await axios.get(
              `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json`
            );
            setArticles(response3.data.getFoodKr.item);

            setDatatype(1);
            break;
          case "&category=busanWalking":
            const response4 = await axios.get(
              `https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&pageNo=1&numOfRows=100&resultType=json`
            );
            setArticles(response4.data.getWalkingKr.item);

            setDatatype(2);
            break;
          default:
            alert("카테고리를 선택해주세요.");
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    resultData();
  }, [category]);

  if (loading) {
    return <NewListCss>데이터 받는중(대기중 ....)</NewListCss>;
  }

  if (!articles) {
    return null;
  }

  const choosePage = ({ articles }) => {
    switch (datatype) {
      case 0:
        return (
          <div>
            {articles.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </div>
        );
      case 1:
        return (
          <div>
            {articles.map((article) => (
              <PublicItem key={article.MAIN_IMG_THUMB} article={article} />
            ))}
          </div>
        );
      case 2:
        return (
          <div>
            {articles.map((article) => (
              <PublicItem2 key={article.MAIN_IMG_THUMB} article={article} />
            ))}
          </div>
        );
      default:
        return;
    }
  };

  return <NewListCss>{choosePage({ articles })}</NewListCss>;
};

export default NewList;
