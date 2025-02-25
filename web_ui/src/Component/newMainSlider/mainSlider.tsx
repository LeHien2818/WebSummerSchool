'use client'
import { useState } from 'react';
import './slider.css'
import { Box } from '@mui/material';
import { Button } from 'antd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NewsItem from './newsItem';

export interface dataSldier {
    id: number,
    author: string,
    content: string,
    category: string,
    img: string,
    title: string,
    data: any
}
interface dataProps {
    sliderData: dataSldier,
    data: any
}
const ImageSlider = (props: any) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex === 0 ? props.sliderData.length - 1 : prevIndex - 1));

    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.sliderData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Box
           
            sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column"


            }
            }>
            {props != "" ?
                <>
                    <Box>
                        {

                            props.sliderData.map((data: dataSldier,

                                index: number) => {
                                return (
                                    <div
                                        key={data.id}
                                        style={{
                                            display: index === currentIndex ? 'block' : 'none'
                                        }}>

                                        <NewsItem
                                            author={data.author}
                                            title={data.title}
                                            category={data.category}
                                            img={data.img}
                                            content={data.content}
                                            data={data.data} />
                                    </div>
                                )
                            })
                        }
                    </Box>
                </> :
                <>
                    <Box>

                        <NewsItem
                            author={"No entry data"}
                            title={"No entry data"}
                            category={"No entry data"}
                            img={""}
                            content={"no entry "}
                            data={""} />

                    </Box>
                </>

            }

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "Center",
                marginBottom: "1%",
                marginTop: "1%"

            }}>
                <Button onClick={handlePrev}><ArrowBackIosNewIcon /></Button>
                <Button onClick={handleNext}><ArrowForwardIosIcon /></Button>
            </Box>

        </Box >
    );
};

export default ImageSlider;
