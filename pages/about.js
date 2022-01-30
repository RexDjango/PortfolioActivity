import aboutContent from "./about.data";
import styles from "../styles/About.module.css";

export const Banner = (props) => {
  return (
    <div className={styles.Banner}>
      <div className={styles.pageTitle}>
        <h1 className="text-center">{props.title}</h1>
        <p></p>
        <h4
          className="text-center"
          dangerouslySetInnerHTML={{ __html: props.hero_content }}
        ></h4>
      </div>
    </div>
  );
};

export default function about() {
  var divImage = {
    backgroundImage:
      "url('https://kfg6bckb.media.zestyio.com/zesty-product-shot-right-side.jpg')",
  };
  return (
    <>
      {aboutContent.map((aboutItem, index) => (
        <main className={styles.aboutBg} key={index}>
          <div
            className={styles.Banner}
            style={{ backgroundImage: `url(${aboutItem.hero_image})` }}
          >
            <div className={styles.pageTitle}>
              <h1 className="text-center">{aboutItem.title}</h1>
              <p></p>
              <h4
                className="text-center"
                dangerouslySetInnerHTML={{ __html: aboutItem.hero_content }}
              ></h4>
            </div>
          </div>
          <div className="container myaboutpageContent">
            <div
              dangerouslySetInnerHTML={{ __html: aboutItem.page_content }}
            ></div>
          </div>
        </main>
      ))}
    </>
  );
}
