import { FileDownload } from '@/pages/resources/downloads'
import React from 'react'


const MarqueeSlide = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <p>
                    <span>UNILAG: Supplementary Entrance Examination holds October 26, 2024. </span>
                    <span>U.S. Election Event at UNILAG holds October 29, 2024. </span>
                    <span>Senate House fumigation scheduled for November 2, 2024. </span>
                    <span>Unique UNILAG Staff Cooperative AGM/Election on November 7, 2024. </span>
                    <span>African Research Security Consortium briefing on November 5-6, 2024. </span>
                    <span>UNILAG Consult Ltd 40th Anniversary Seminar on November 26, 2024.</span>
                </p>
                {/* <a href="/news" className="view-news-link">View Full News</a> */}
            </div>
            <div className="border border-[#00000009] rounded-[5px] p-2 max-w-max mx-3">
                <FileDownload downloadLink="/events/agm" message="View Full News" />

            </div>
        </div>
    )
}

export default MarqueeSlide