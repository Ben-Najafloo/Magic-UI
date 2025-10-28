"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";



export function FastContact() {
    const placeholders = [
        "Do you look for a Software Developer?",
        "Give me your number?",
        "I can also find you on LinkedIn, just put your LinkedIn?",
        "Give me your email address?"
    ];

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div>
            <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>
    );
}
