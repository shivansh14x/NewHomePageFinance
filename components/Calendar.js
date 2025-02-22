function Calendar() {
    const [currentDate] = React.useState(new Date());
    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
        <div className="calendar-section" data-name="calendar">
            <h2 className="text-xl font-bold mb-4">
                {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </h2>
            <div className="grid grid-cols-7 gap-1" data-name="calendar-grid">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-bold p-1">
                        {day}
                    </div>
                ))}
                {days.map(day => (
                    <div
                        key={day}
                        className={`text-center p-2 rounded hover:bg-gray-100 cursor-pointer
                            ${day === currentDate.getDate() ? 'bg-blue-100' : ''}`}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}
