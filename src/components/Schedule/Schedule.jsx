import './Schedule.css'
function Schedule() {

    return (
        <div className = 'schedule-container'>
            <h1 className = 'schedule-heading'>Program Schedule</h1>
            <div className = 'schedule-cards-container'>
                <div className = 'card'>
                    <div className = 'card-left'>
                        <p className = 'card-heading'>Topic 1</p>
                        <p className = 'card-details'>Guest Speaker – Martin (Tin) Salías</p>
                    </div>
                    <div className = 'card-right'>
                        <p className = 'time'>08:30 - 10:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
