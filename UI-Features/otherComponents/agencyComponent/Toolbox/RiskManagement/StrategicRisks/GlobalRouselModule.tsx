import styles from "@/styles/Kaprew/Home.module.css";
import ProductCss from "@/styles/White/Main.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Image from "next/image";
import BallpointPen from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenVIII.jpg";
import DeskMats from "@/UI-Features/UI-Gallery/Kaprew/DeskMat/DeskMatV.jpg";
import ReceiptBooks from "@/UI-Features/UI-Gallery/Kaprew/ReceiptBook/ReceiptBookVII.jpg";
import ClipBoard from "@/UI-Features/UI-Gallery/Kaprew/ClipBoard/ClipBoardV.jpg";

export default function GlobalRouselModule() {
    return (
        <>
            <div className={styles.GridedFooterModuleI}>
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    autoFocus={true}
                    interval={9000}
                    transitionTime={3000}
                    renderArrowNext={(nextHandler, hasNext) => (
                        <div
                            onClick={nextHandler}
                            style={{
                                backgroundColor: 'black',
                                width: '2rem',
                                height: '2rem',
                                cursor: 'pointer',
                                borderRadius: '50%',
                                display: 'grid',
                                placeContent: 'center',
                                position: 'absolute',
                                top: '50%',
                                right: '0'
                            }}
                        >
                            <FontAwesomeIcon
                                style={{
                                    width: '.8rem',
                                    color: 'white'
                                }}
                                icon={faArrowRight} />
                        </div>
                    )}
                    renderArrowPrev={(prevHandler, hasNext) => (
                        <div
                            onClick={prevHandler}
                            style={{
                                backgroundColor: 'black',
                                width: '2rem',
                                height: '2rem',
                                cursor: 'pointer',
                                borderRadius: '50%',
                                display: 'grid',
                                placeContent: 'center',
                                position: 'absolute',
                                top: '50%',
                                right: '0'
                            }}
                        >
                            <FontAwesomeIcon
                                style={{
                                    width: '.8rem',
                                    color: 'white'
                                }}
                                icon={faArrowRight} />
                        </div>
                    )}
                    renderIndicator={(clickHandler, isSelected, index, label) => (
                        <div
                            key={index}
                            aria-label={label}
                            onClick={clickHandler}
                            style={{
                                display: 'inline-block',
                                width: '.5rem',
                                height: '.5rem',
                                backgroundColor: isSelected ? 'blue' : 'black',
                                margin: '0 .5rem',
                                cursor: 'pointer',
                                borderRadius: '50%'
                            }}
                        >
                        </div>
                    )}
                    showStatus={true}
                    preventMovementUntilSwipeScrollTolerance={true}
                    swipeScrollTolerance={500}
                    showThumbs={false}
                    className={styles.RouselProperty}
                >
                    <div className={ProductCss.GridPropertyIII}>
                        <div className={ProductCss.MainProductContent}>
                                    <div
                                    className={`${ProductCss["MainProductElement"]} ${ProductCss["Wrap"]}`}
                                  >
                                    <Image
                                      priority
                                      alt="Earth Speed"
                                      src={BallpointPen}
                                       
                                      fill={true}
                                      style={{ objectFit: "cover" }}
                                    />
                                    <div
                                      className={`${ProductCss["MainProductGridNumber"]} ${ProductCss["MainProductGridBg"]}`}
                                    >
                                      <Link href="/LaunchingSoon" className={ProductCss.ProductName}>
                                        Ballpoint Pen
                                      </Link>
                                    </div>
                                  </div>
                                  <div className={ProductCss.WrapI}>
                                      <div
                                        className={`${ProductCss["MainProductGridNumberI"]} ${ProductCss["MainProductGridBgI"]}`}
                                      >
                                        <Link href="/LaunchingSoon">Purchase Product</Link>
                                      </div>
                                    </div>
                        </div>
                        <div className={ProductCss.MainProductContent}>
                                    <div
                                    className={`${ProductCss["MainProductElement"]} ${ProductCss["Wrap"]}`}
                                  >
                                    <Image
                                      priority
                                      alt="Earth Speed"
                                      src={DeskMats}
                                       
                                      fill={true}
                                      style={{ objectFit: "cover" }}
                                    />
                                    <div
                                      className={`${ProductCss["MainProductGridNumber"]} ${ProductCss["MainProductGridBg"]}`}
                                    >
                                      <Link href="/LaunchingSoon" className={ProductCss.ProductName}>
                                        Desk Mat
                                      </Link>
                                    </div>
                                  </div>
                                  <div className={ProductCss.WrapI}>
                                      <div
                                        className={`${ProductCss["MainProductGridNumberI"]} ${ProductCss["MainProductGridBgI"]}`}
                                      >
                                        <Link href="/LaunchingSoon">Purchase Product</Link>
                                      </div>
                                    </div>
                        </div>
                    </div>
                    <div className={ProductCss.GridPropertyIII}>
                        <div className={ProductCss.MainProductContent}>
                                    <div
                                    className={`${ProductCss["MainProductElement"]} ${ProductCss["Wrap"]}`}
                                  >
                                    <Image
                                      priority
                                      alt="Earth Speed"
                                      src={ReceiptBooks}
                                       
                                      fill={true}
                                      style={{ objectFit: "cover" }}
                                    />
                                    <div
                                      className={`${ProductCss["MainProductGridNumber"]} ${ProductCss["MainProductGridBg"]}`}
                                    >
                                      <Link href="/LaunchingSoon" className={ProductCss.ProductName}>
                                        Receipt Book
                                      </Link>
                                    </div>
                                  </div>
                                  <div className={ProductCss.WrapI}>
                                      <div
                                        className={`${ProductCss["MainProductGridNumberI"]} ${ProductCss["MainProductGridBgI"]}`}
                                      >
                                        <Link href="/LaunchingSoon">Purchase Product</Link>
                                      </div>
                                    </div>
                        </div>
                        <div className={ProductCss.MainProductContent}>
                                    <div
                                    className={`${ProductCss["MainProductElement"]} ${ProductCss["Wrap"]}`}
                                  >
                                    <Image
                                      priority
                                      alt="Earth Speed"
                                      src={ClipBoard}
                                       
                                      fill={true}
                                      style={{ objectFit: "cover" }}
                                    />
                                    <div
                                      className={`${ProductCss["MainProductGridNumber"]} ${ProductCss["MainProductGridBg"]}`}
                                    >
                                      <Link href="/LaunchingSoon" className={ProductCss.ProductName}>
                                        Clip Board
                                      </Link>
                                    </div>
                                  </div>
                                  <div className={ProductCss.WrapI}>
                                      <div
                                        className={`${ProductCss["MainProductGridNumberI"]} ${ProductCss["MainProductGridBgI"]}`}
                                      >
                                        <Link href="/LaunchingSoon">Purchase Product</Link>
                                      </div>
                                    </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}