"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const months = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

interface DropdownProps {
    label: string;
    options: (string | number)[];
    value: string | number;
    onChange: (value: string | number) => void;
    placeholder: string;
}

const Dropdown = ({
    label,
    options,
    value,
    onChange,
    placeholder,
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 py-1 rounded-lg hover:bg-secondary/50 transition-colors text-foreground"
            >
                <span className="text-sm">{value || placeholder}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto min-w-30">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className="w-full px-4 text-left text-sm hover:bg-secondary transition-colors first:rounded-t-xl last:rounded-b-xl"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const BookingSearchBar = () => {
    const [location, setLocation] = useState("");
    const [startMonth, setStartMonth] = useState<string | number>("");
    const [startDay, setStartDay] = useState<string | number>("");
    const [endMonth, setEndMonth] = useState<string | number>("");
    const [endDay, setEndDay] = useState<string | number>("");

    const handleSearch = () => {
        console.log({ location, startMonth, startDay, endMonth, endDay });
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="flex items-center bg-card rounded-full border border-border border-gray-300 shadow-lg shadow-foreground/5 p-2 pl-6">
                {/* Location Input */}
                <div className="min-w-30">

                    <label className="block text-xs font-semibold text-foreground uppercase tracking-wide mb-0.5">
                        სად
                    </label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="მოძებნე მდებარე..."
                        className="w-full bg-transparent text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300 mx-4" />

                {/* Start Date */}
                <div className="shrink-0 px-6">

                    <label className="block text-xs font-semibold text-foreground uppercase tracking-wide mb-0.5">
                        დაწყება
                    </label>
                    <div className="flex items-center gap-8">
                        <Dropdown
                            label="თარიღი"
                            options={months}
                            value={startMonth}
                            onChange={setStartMonth}
                            placeholder="თარიღი"
                        />

                        {/* INNER DIVIDER */}

                        <Dropdown
                            label="დრო"
                            options={days}
                            value={startDay}
                            onChange={setStartDay}
                            placeholder="დრო"
                        />
                    </div>
                </div>

                <div className="w-px h-6 bg-gray-300" />


                {/* End Date */}
                <div className="shrink-0 px-6">

                    <label className="block text-xs font-semibold text-foreground uppercase tracking-wide mb-0.5">
                        დასრულება
                    </label>
                    <div className="flex items-center gap-8">
                        <Dropdown
                            label="თარიღი"
                            options={months}
                            value={endMonth}
                            onChange={setEndMonth}
                            placeholder="თარიღი"
                        />
                        {/* INNER DIVIDER */}

                        <Dropdown
                            label="დრო"
                            options={days}
                            value={endDay}
                            onChange={setEndDay}
                            placeholder="დრო"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSearch}
                    className="shrink-0 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors shadow-md"
                >
                    <Search className="w-5 h-5 text-white" />
                </button>

            </div>
        </div>
    );
};

export default BookingSearchBar;
