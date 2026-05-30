import styles from '@/styles/Legal/Desktop.module.css';
import HeroCss from "@/styles/Builder-Dashboard/White/Home.module.css";
import Logo from '@/MyPotraits/E.png';
import Link from "next/link";
import Image from "next/image";

export default function ServiceTitle() {
  return (
    <>

      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModuleXV}>
          <div className={styles.GridedFooterModule}>
            <div className={styles.GridOne}>
              <label
                className={`${HeroCss["MainTitle"]}`}
                htmlFor="queryHotelName"
              >
                <Image
                  priority
                  src={Logo}
                  alt="Nale Security Logo"
                  className={HeroCss.MainHeroIcon}
                  style={{ objectFit: "cover" }}
                  quality={100}
                />
              </label>
            </div>
            <div className={styles.GridOne}>

              <div className={styles.ShopTitleXV}>
                <h1>Best Content Creator. Kenyan-Based. Afro Fusion Artist. </h1>
              </div>
              <div className={styles.WithTitle}>
                <h2>Title</h2>
              </div>
              <div className={styles.VisionTitle}>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore illum quas velit quae officiis? Cum esse deleniti magni eos temporibus, voluptatibus aliquid doloremque, molestiae earum vero veniam ut ipsum.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
