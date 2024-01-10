import React from "react";

function Videos() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/70 z-[200]">
            <div className="flex items-center">
                <div className="items-start bg-red-300 px-5 py-5 rounded-xl">
                    <div>
                        {/* Video Iframe */}
                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/857123738?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture"
                                title="Видео 1"
                                style={{
                                    width: "800px",
                                    height: "480px",
                                }}
                            />
                        </div>

                    </div>
                    {/* Video Information */}
                    <div className="flex justify-between items-start mt-2">
                        <div className="w-[80%]">
                            <h5 className="text-black text-2xl font-semibold mb-2">
                                C# сабағынан үзінді
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videos;
