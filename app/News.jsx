"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { news } from "../news.js";

const News = () => {
  return (
    <div id="news" className="relative px-6 lg:px-8 py-8 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-8 lg:pb-12">
        <h1 class="text-2xl text-center font-semibold tracking-tight text-gray-700 sm:text-4xl md:text-left">
          Latest News
        </h1>
      </div>

      <ResponsiveMasonry
        className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 lg:pb-6"
        columnsCountBreakPoints={{ 640: 2, 768: 2, 900: 3, 1280: 4 }}
      >
        <Masonry gutter={20}>
          {news.articles.map((article) => (
            <article
              key={article.url}
              className="w-full rounded-md bg-white overflow-hidden shadow-sm"
            >
              <img src={article.urlToImage} className="w-full object-cover" />
              <div className="p-2">
                <h1 className="text-base font-semibold">{article.title}</h1>
                <p className="text-sm">{article.description}</p>
              </div>
            </article>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* <div class="mx-auto w-fit px-6 lg:px-8">
        <button class="text-lg px-3 py-2 shadow-sm rounded-md font-semibold whitespace-nowrap tracking-tight text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white">
          Load More
        </button>
      </div> */}
    </div>
  );
};

export default News;
