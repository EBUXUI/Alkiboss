"use client";

import CrowdFundingBg from "@/UI-Features/UI-Gallery/EarthOrganizer/FoodOrderingPlatform/FoodOrderingVIII.jpg";
import CrowdFunding from "@/UI-Features/UI-Gallery/EarthOrganizer/HotelBookingPlatform/HotelBooking.jpg";
import VirtualVolunteerBg from "@/UI-Features/UI-Gallery/EarthOrganizer/FoodOrderingPlatform/FoodOrderingII.jpg";
import VirtualVolunteer from "@/UI-Features/UI-Gallery/EarthOrganizer/HotelBookingPlatform/HotelBookingII.jpg";
import CommunitySeminarBg from "@/UI-Features/UI-Gallery/EarthOrganizer/FoodOrderingPlatform/FoodOrderingIII.jpg";
import CommunitySeminar from "@/UI-Features/UI-Gallery/EarthOrganizer/HotelBookingPlatform/HotelBookingIII.jpg";
import ProductCss from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

export default function BlogProductComponent() {
    const imageData = [
        {
            src: CrowdFunding,
            bg: CrowdFundingBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/FoundationEntry/CrowdFunding",
            preview: "/FoundationEntry/CrowdFunding",
        },
        {
            src: VirtualVolunteer,
            bg: VirtualVolunteerBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/GlobalParticipation/Volunteering/VirtualVolunteering",
            preview: "/GlobalParticipation/Volunteering/VirtualVolunteering",
        },
        {
            src: CommunitySeminar,
            bg: CommunitySeminarBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/GlobalParticipation/Awareness/CommunitySeminar",
            preview: "/GlobalParticipation/Awareness/CommunitySeminar",
        },
        {
            src: CrowdFunding,
            bg: CrowdFundingBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/FoundationEntry/CrowdFunding",
            preview: "/FoundationEntry/CrowdFunding",
        },
        {
            src: VirtualVolunteer,
            bg: VirtualVolunteerBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/GlobalParticipation/Volunteering/VirtualVolunteering",
            preview: "/GlobalParticipation/Volunteering/VirtualVolunteering",
        },
        {
            src: CommunitySeminar,
            bg: CommunitySeminarBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/GlobalParticipation/Awareness/CommunitySeminar",
            preview: "/GlobalParticipation/Awareness/CommunitySeminar",
        },
        {
            src: CrowdFunding,
            bg: CrowdFundingBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/FoundationEntry/CrowdFunding",
            preview: "/FoundationEntry/CrowdFunding",
        },
        {
            src: VirtualVolunteer,
            bg: VirtualVolunteerBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/GlobalParticipation/Volunteering/VirtualVolunteering",
            preview: "/GlobalParticipation/Volunteering/VirtualVolunteering",
        },
        {
            src: CommunitySeminar,
            bg: CommunitySeminarBg,
            alt: "Earth Software Builder",
            title: "Blog Name",
            link: "/GlobalParticipation/Awareness/CommunitySeminar",
            preview: "/GlobalParticipation/Awareness/CommunitySeminar",
        }
    ]

    interface ImageProps {
        src: StaticImageData;
        bg: StaticImageData;
        alt: string;
        title: string;
        link: string;
        preview: string;
    }
    
    const ImageCard = ({bg, alt, title, link, preview }:  ImageProps ) => (
        <div className={`${ProductCss.MainProductElement} ${ProductCss.MainProductElementAnime} ${ProductCss.MainProductElementIsometric} ${ProductCss.MainProductElementStackSlide} ${ProductCss.Wrap}`}>
            <div className={`${ProductCss.MainProductElementImage}`}>
                <Image
                    priority
                    alt={alt}
                    src={bg}
                    quality={100}
                    fill={true}
                    className={ProductCss.MainProductElementImage}
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={`${ProductCss.MainProductGridNumber} ${ProductCss.MainProductGridBg}`}>

                <Link href={link} className={ProductCss.ProductName}>
                    {title}
                </Link>
                <Link href={preview} className={ProductCss.ProductPrice}>
                    Read
                </Link>
            </div>
        </div>
    );

    return (
        <section className={ProductCss.HeroContentTitle}>
            <div className={ProductCss.MainProductImage}>
                {imageData.map((image, index) => (
                    <ImageCard key={index} {...image} />
                ))}
            </div>
        </section>
    );
}


