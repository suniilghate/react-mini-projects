let BHClock = () => {
    let time = new Date();
    return <p className="lead">This is current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default BHClock;