const ProgressBar = ({progress, color}) => {
    return(
        <>
            <div className="w-full h-2 bg-neutral-200 rounded-full mt-3">
                <div className="h-2 bg-sky-500 rounded-full" style={{width: `${progress}%`, backgroundColor: color}}></div>
            </div>
        </>
    )
}

export default ProgressBar