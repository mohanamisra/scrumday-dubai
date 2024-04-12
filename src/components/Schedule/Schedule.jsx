import './Schedule.css'
function Schedule() {

    return (
        <div className = 'schedule-container'>
            <h1 className = 'schedule-heading'>The Event Line-Up</h1>
            <div className='schedule-cards-container'>
                <div className='schedule-card'>
                    <div className='card-left'>
                        <p className='card-heading'>Topic 1</p>
                        <p className='card-details'>Guest Speaker –
                            <span className='schedule-card-name'> Martin (Tin) Salías</span>
                        </p>
                    </div>
                    <div className='card-right'>
                        <p className='time'>08:30 - 10:00</p>
                    </div>
                </div>
                <div className='schedule-card'>
                    <div className='card-left'>
                        <p className='card-heading'>AM Snack</p>
                        <p className='card-details'>For everyone
                            <span className='schedule-card-name'></span>
                        </p>
                    </div>
                    <div className='card-right'>
                        <p className='time'>10:00 - 10:45</p>
                    </div>
                </div>
                <div className='schedule-card'>
                    <div className='card-left'>
                        <p className='card-heading'>Design High Performance Organizations</p>
                        <p className='card-details'>Keynote Speaker –
                            <span className='schedule-card-name'> Fabian Schwartz</span>
                        </p>
                    </div>
                    <div className='card-right'>
                        <p className='time'>11:00 - 12:30</p>
                    </div>
                </div>

                <div className='schedule-card'>
                    <div className='card-left'>
                        <p className='card-heading'>Lunch</p>
                        <p className='card-details'>For everyone
                            <span className='schedule-card-name'></span>
                        </p>
                    </div>
                    <div className='card-right'>
                        <p className='time'>12:30 - 2:00</p>
                    </div>
                </div>

                <div className='schedule-card'>
                    <div className='card-left'>
                        <p className='card-heading'>Story Cubes</p>
                        <p className='card-details'>Guest Speaker –
                            <span className='schedule-card-name'> Carlton Nettleton</span>
                        </p>
                    </div>
                    <div className='card-right'>
                        <p className='time'>02:15 - 03:45</p>
                    </div>
                </div>

                <div className='schedule-card'>
                    <div className='card-left'>
                        <p className='card-heading'>PM Snack</p>
                        <p className='card-details'>For everyone
                            <span className='schedule-card-name'></span>
                        </p>
                    </div>
                    <div className='card-right'>
                        <p className='time'>3:45 - 4:30</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Schedule
