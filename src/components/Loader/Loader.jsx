import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css"; // Импортируем стили

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      <p className={css.loadingText}>loading...</p>
    </div>
  );
};

export default Loader;
