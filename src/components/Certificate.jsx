"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HyperText } from "./ui/hyper-text";

export function Certificate() {
    const CertBox = ({ imgSrc, title, date }) => {
        return (
            <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white">
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {date}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={imgSrc}
                        className="h-68 w-full  rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail" />
                </CardItem>

            </CardBody>
        )
    }
    return (
        <div id="certificates" className="relative flex w-full flex-col py-24 items-center justify-center overflow-hidden">
            <div className="flex text-blue-500 py-3">
                <HyperText className="text-xl">
                    Recently Gained Certifications
                </HyperText>
            </div>
            <div className="lg:flex p-x-4 justify-between lg:gap-x-4">
                <CardContainer className="inter-var">
                    <CertBox title="AWS Cloud Technical Essentials" date="May 2023" imgSrc="/certificates/aws.jpg" />
                </CardContainer>
                <CardContainer className="inter-var">
                    <CertBox title="AWS Machine Learning" date="Feb 2025" imgSrc="/certificates/aws-ML.jpg" />
                </CardContainer>
            </div>
            <div className="lg:flex p-x-4 justify-between lg:gap-x-4">
                <CardContainer className="inter-var">
                    <CertBox title="Laravel Mastery 8" date="May 2023" imgSrc="/certificates/laravel.jpg" />
                </CardContainer>
                <CardContainer className="inter-var">
                    <CertBox title="Object Oriented PHP & MVC" date="Oct 2022" imgSrc="/certificates/oop.jpg" />
                </CardContainer>
            </div>
        </div>

    );
}
