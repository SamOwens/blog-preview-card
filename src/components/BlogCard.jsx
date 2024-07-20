import illustrationArticle from '../assets/img/illustration-article.svg';
import userImage from '../assets/img/image-avatar.webp';

const BlogCard = () => {
  return (
    <div
      className="w-card-w h-card-h sm:w-sm-card-w sm:h-sm-card-h rounded-card bg-white border border-grey-950 p-6 font-figtree text-grey-950 drop-shadow-card"
      role="main"
    >
      <div className="rounded-card-image mb-6 h-card-image overflow-hidden">
        <img
          src={illustrationArticle}
          alt="Article Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-yellow rounded-pill py-1 px-2 text-grey-950 font-extrabold w-fit sm:text-sm text-xs mb-3">
        <p>Learning</p>
      </div>
      <div className="text-xs sm:text-sm mb-3">
        <p>Published 21 Dec 2023</p>
      </div>
      <a className="sm:text-2xl text-xl mb-3 font-extrabold transition hover:text-yellow cursor-pointer block">
        <h1>HTML & CSS foundations</h1>
      </a>
      <div className="text-grey-500 text-sm sm:text-base mb-6">
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex items-center">
        <img
          src={userImage}
          alt="Portrait photo of Greg Hooper"
          className="h-8 w-8 rounded-full overflow-hidden me-3"
        />
        <p className="text-grey-950 font-extrabold text-sm">Greg Hooper</p>
      </div>
    </div>
  );
};

export default BlogCard;
