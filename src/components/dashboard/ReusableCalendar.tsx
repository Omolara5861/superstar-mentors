import React from "react";
import Calendar from "react-calendar";

interface Event {
    title: string;
    time: string;
}

interface ReusableCalendarProps {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    events: Event[];
}

const ReusableCalendar: React.FC<ReusableCalendarProps> = ({ date, setDate, events }) => {
    return (
        <>
            {/* Calendar Section */}
            <div className="p-6 bg-white rounded-lg shadow-md">
                {/* React Calendar */}
                <Calendar
                    onChange={(value) => setDate(value as Date)}
                    value={date}
                    className="border-none text-center rounded-lg"
                    tileClassName={({ date: tileDate, view }) =>
                        view === "month" && tileDate.toDateString() === new Date().toDateString()
                            ? "bg-accent text-primary rounded-full text-black"
                            : ""
                    }
                    nextLabel=">" // Custom right arrow
                    prevLabel="<" // Custom left arrow
                />

                {/* Event Cards */}
                <div className="mt-6 space-y-4">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="flex justify-between text-sm rounded-[4px] p-[13px] bg-gradient-to-r from-[#042AA2] to-[#CC8A06] text-[#F1FFFB] rounded-s"
                        >
                            <p className="font-medium max-w-[50%]">{event.title}</p>
                            <p>{event.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ReusableCalendar;