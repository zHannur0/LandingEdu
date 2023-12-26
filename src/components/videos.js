import x from "../accets/x.svg";
function Videos() {
    return (
        <div className='w-screen h-screen fixed left-0 flex justify-center item-center bg-black/70 fixed z-[200]'>
            <div className="flex items-center ">
                <div className='items-start bg-red-300 px-5 py-5 rounded-xl'>
                    <div>
                        <video src="" controls className='w-[768px] h-[512px] xs:w-[256px] xs:h-[256px]'></video>
                    </div>
                    <div className='flex justify-between items-start mt-2'>
                        <div className="w-[80%]">
                            <h5 className='text-black text-2xl font-semibold mb-2 w-[80%]'>C# сабағынан үзінді</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videos;