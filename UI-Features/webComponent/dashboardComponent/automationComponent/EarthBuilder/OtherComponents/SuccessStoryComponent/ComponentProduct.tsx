import styles from '@/styles/Legal/Desktop.module.css';
import Image from 'next/image';
import LegalProductImage from '@/UI-Features/UI-Gallery/Background/ServiceIV.jpg';
import Link from 'next/link';
import { faCloud, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ServiceProduct() {
  return (
    <>

      <div className={styles.HeroProductContent}>
        <div className={styles.HeroProductModule}>
          <div className={styles.HeroProductGrid}>
            <div className={styles.ProductMainTitle}>
              <FontAwesomeIcon className={styles.HeroIcon} icon={faShop} />
              <div>Compliment Message</div>
            </div>
            <div className={styles.GridedProductDescription}>
              <div className={styles.FirstProductDescription}>
                <h3> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis pariatur quos reiciendis dolores! Iure eius dolores ab aliquam enim.
                </h3>
              </div>
              <div className={styles.SecondProductDescription}>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quas modi natus excepturi, magnam eligendi minus mollitia officiis. 
                </h3>

              </div>
              <div className={styles.MainProductImage}>
                <div className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}>
                  <Image
                    priority
                    alt="Soriyo International Management Consultancy Services"
                    src={LegalProductImage}
                    quality={100}
                    fill ={true}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}><Link href='/ServiceConsultancy/CustomerExperience'>Niche CTA</Link></div>
                </div>
              </div>
              <div className={styles.MainPurchaseModule}>
                <div className={styles.MedicalCatalouge}> Niche Title </div>
                <h2 className={styles.MedicalCatalougeMessage}> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas, obcaecati dolorum ipsam rem et.
                </h2>
                <div className={styles.MainProductButton}>
                  <Link href='/ServiceConsultancy/CustomerExperience' className={styles.ProductLink}>
                    Call To Action
                  </Link>
                </div>
              </div>
            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

