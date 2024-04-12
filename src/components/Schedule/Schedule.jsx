import './Schedule.css'
function Schedule() {

    return (
        <div className = 'schedule-container'>
            <h1 className = 'schedule-heading'>The Event Line-Up</h1>
            <div className = 'schedule-cards-container'>
                <div className = 'schedule-card'>
                    <div className = 'card-left'>
                        <p className = 'card-heading'>Topic 1</p>
                        <p className = 'card-details'>Guest Speaker –
                            <span className = 'schedule-card-name'> Martin (Tin) Salías</span>
                        </p>
                    </div>
                    <div className = 'card-right'>
                        <p className = 'time'>08:30 - 10:00</p>
                    </div>
                </div>
                <div className = 'schedule-card'>
                    <div className = 'card-left'>
                        <p className = 'card-heading'>Topic 1</p>
                        <p className='card-details'>Guest Speaker –
                            <span className='schedule-card-name'> Martin (Tin) Salías</span>
                        </p>
                    </div>
                    <div className='card-right'>
                        <p className = 'time'>08:30 - 10:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
