function Current() {
    return (
    <div className="w-1/2 bg-black flex m-4 p-2 items-center justify-center">
        <span className="text-white">현재시간 : </span>
        <span style={{color: 'yellow', fontWeight: 'bold'}}>
            {new Date().toLocaleTimeString()}
        </span>
    </div>
    )
}

export default Current

