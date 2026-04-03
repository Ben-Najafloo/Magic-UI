'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Search } from 'lucide-react';

const VOCABULARY = [
    // Greetings
    { german: 'Hallo', english: 'hello', category: 'Greetings' },
    { german: 'Guten Morgen', english: 'good morning', category: 'Greetings' },
    { german: 'Guten Tag', english: 'good day', category: 'Greetings' },
    { german: 'Guten Abend', english: 'good evening', category: 'Greetings' },
    { german: 'Gute Nacht', english: 'good night', category: 'Greetings' },
    { german: 'Wie geht\'s?', english: 'how are you?', category: 'Greetings' },
    { german: 'Danke', english: 'thank you', category: 'Greetings' },
    { german: 'Bitte', english: 'please / you\'re welcome', category: 'Greetings' },

    // Personal Information
    { german: 'Ich heiße...', english: 'my name is...', category: 'Personal Info' },
    { german: 'Woher kommst du?', english: 'where are you from?', category: 'Personal Info' },
    { german: 'Ich komme aus...', english: 'I come from...', category: 'Personal Info' },
    { german: 'Ich bin ... Jahre alt', english: 'I am ... years old', category: 'Personal Info' },
    { german: 'Ich wohne in...', english: 'I live in...', category: 'Personal Info' },
    { german: 'Wie heißt du?', english: 'What is your name?', category: 'Personal Info' },
    { german: 'Wer bist du?', english: 'Who are you?', category: 'Personal Info' },
    { german: 'Wie geht es dir?', english: 'How are you?', category: 'Personal Info' },
    { german: 'Freut mich', english: 'Pleased to meet you', category: 'Personal Info' },
    { german: 'ledig', english: 'single', category: 'Personal Info' },
    { german: 'verheiratet', english: 'married', category: 'Personal Info' },
    { german: 'Ich bin Student(in)', english: 'I am a student', category: 'Personal Info' },
    { german: 'Beruf', english: 'profession / job', category: 'Personal Info' },
    { german: 'Hobbys', english: 'hobbies', category: 'Personal Info' },
    { german: 'die Telefonnummer', english: 'phone number', category: 'Personal Info' },
    { german: 'die Adresse', english: 'address', category: 'Personal Info' },
    { german: 'die Staatsangehörigkeit', english: 'nationality', category: 'Personal Info' },
    { german: 'Sprechen Sie Deutsch?', english: 'Do you speak German? (formal)', category: 'Personal Info' },
    { german: 'Ich spreche ein bisschen...', english: 'I speak a little...', category: 'Personal Info' },
    { german: 'meine Muttersprache', english: 'my native language', category: 'Personal Info' },

    // Jobs
    { german: 'der Arzt', english: 'doctor', category: 'Jobs' },
    { german: 'der Lehrer', english: 'teacher', category: 'Jobs' },
    { german: 'der Kellner', english: 'waiter', category: 'Jobs' },
    { german: 'der Polizist', english: 'police officer', category: 'Jobs' },
    { german: 'der Mechaniker', english: 'mechanic', category: 'Jobs' },
    { german: 'der Engenieur', english: 'Engineer', category: 'Jobs' },
    { german: 'der Student', english: 'student', category: 'Jobs' },
    // Family
    { german: 'die Mutter', english: 'mother', category: 'Family' },
    { german: 'der Vater', english: 'father', category: 'Family' },
    { german: 'die Eltern', english: 'parents', category: 'Family' },
    { german: 'der Bruder', english: 'brother', category: 'Family' },
    { german: 'die Schwester', english: 'sister', category: 'Family' },
    { german: 'die Frau', english: 'woman / wife', category: 'Family' },
    { german: 'der Mann', english: 'man / husband', category: 'Family' },
    { german: 'das Kind', english: 'child', category: 'Family' },
    { german: 'die Kinder', english: 'children', category: 'Family' },
    { german: 'die Familie', english: 'family', category: 'Family' },
    { german: 'der Freund / die Freundin', english: 'friend / boyfriend / girlfriend', category: 'Family' },

    // Food & Drink
    { german: 'das Essen', english: 'food', category: 'Food & Drink' },
    { german: 'das Getränk', english: 'drink', category: 'Food & Drink' },
    { german: 'das Brot', english: 'bread', category: 'Food & Drink' },
    { german: 'das Brötchen', english: 'bread roll', category: 'Food & Drink' },
    { german: 'der Apfel', english: 'apple', category: 'Food & Drink' },
    { german: 'die Banane', english: 'banana', category: 'Food & Drink' },
    { german: 'das Wasser', english: 'water', category: 'Food & Drink' },
    { german: 'der Kaffee', english: 'coffee', category: 'Food & Drink' },
    { german: 'der Tee', english: 'tea', category: 'Food & Drink' },
    { german: 'das Bier', english: 'beer', category: 'Food & Drink' },
    { german: 'der Wein', english: 'wine', category: 'Food & Drink' },
    { german: 'die Milch', english: 'milk', category: 'Food & Drink' },
    { german: 'der Saft', english: 'juice', category: 'Food & Drink' },
    { german: 'das Frühstück', english: 'breakfast', category: 'Food & Drink' },
    { german: 'das Mittagessen', english: 'lunch', category: 'Food & Drink' },
    { german: 'das Abendessen', english: 'dinner', category: 'Food & Drink' },
    { german: 'die Suppe', english: 'soup', category: 'Food & Drink' },
    { german: 'der Salat', english: 'salad', category: 'Food & Drink' },
    { german: 'der Zucker', english: 'sugar', category: 'Food & Drink' },
    { german: 'das Salz', english: 'salt', category: 'Food & Drink' },
    { german: 'das Hähnchen', english: 'chicken', category: 'Food & Drink' },
    { german: 'der Fisch', english: 'fish', category: 'Food & Drink' },
    { german: 'das Ei', english: 'egg', category: 'Food & Drink' },
    { german: 'der Kuchen', english: 'cake', category: 'Food & Drink' },
    { german: 'der honig', english: 'honey', category: 'Food & Drink' },
    { german: 'die Marmelade', english: 'jam', category: 'Food & Drink' },

    // Places
    { german: 'das Museum', english: 'Museum', category: 'Places' },
    { german: 'der Park', english: 'park', category: 'Places' },
    { german: 'die Bank', english: 'bank', category: 'Places' },
    { german: 'der Supermarkt', english: 'supermarket', category: 'Places' },
    { german: 'das Restaurant', english: 'restaurant', category: 'Places' },
    { german: 'die Bibliothek', english: 'library', category: 'Places' },
    { german: 'das Kino', english: 'cinema', category: 'Places' },
    { german: 'das Theater', english: 'theater', category: 'Places' },
    { german: 'die Post', english: 'post office', category: 'Places' },
    { german: 'das Cafe', english: 'cafe', category: 'Places' },
    { german: 'die Apotheke', english: 'pharmacy', category: 'Places' },

    // fruits
    { german: 'die Frucht', english: 'fruit', category: 'Fruits' },
    { german: 'die Apfel', english: 'apple', category: 'Fruits' },
    { german: 'die Banane', english: 'banana', category: 'Fruits' },
    { german: 'die Erdbeere', english: 'strawberry', category: 'Fruits' },


    // Dining Items
    { german: 'das Messer', english: 'knife', category: 'Dining' },
    { german: 'die Gabel', english: 'fork', category: 'Dining' },
    { german: 'der Löffel', english: 'spoon', category: 'Dining' },
    { german: 'der Teller', english: 'plate', category: 'Dining' },
    { german: 'das Glas', english: 'glass', category: 'Dining' },
    { german: 'die Tasse', english: 'cup', category: 'Dining' },
    { german: 'die Serviette', english: 'napkin', category: 'Dining' },
    { german: 'die Schüssel', english: 'bowl', category: 'Dining' },
    { german: 'die Flasche', english: 'bottle', category: 'Dining' },
    { german: 'die Speisekarte', english: 'menu', category: 'Dining' },
    { german: 'die Rechnung', english: 'bill / check', category: 'Dining' },
    { german: 'das Salz', english: 'salt', category: 'Dining' },
    { german: 'der Pfeffer', english: 'pepper', category: 'Dining' },
    { german: 'der Zucker', english: 'sugar', category: 'Dining' },
    { german: 'das Tischtuch', english: 'tablecloth', category: 'Dining' },
    { german: 'bestellen', english: 'to order', category: 'Dining' },
    { german: 'bezahlen', english: 'to pay', category: 'Dining' },
    { german: 'frühstücken', english: 'to eat breakfast', category: 'Dining' },

    // Time
    { german: 'heute', english: 'today', category: 'Time' },
    { german: 'morgen', english: 'tomorrow', category: 'Time' },
    { german: 'gestern', english: 'yesterday', category: 'Time' },
    { german: 'jetzt', english: 'now', category: 'Time' },
    { german: 'bald', english: 'soon', category: 'Time' },
    { german: 'Uhr', english: 'o\'clock', category: 'Time' },
    { german: 'Stunde', english: 'hour', category: 'Time' },
    { german: 'Minute', english: 'minute', category: 'Time' },
    { german: 'Zeit', english: 'time', category: 'Time' },
    { german: 'Viertel vor fünf', english: 'quarter to five', category: 'Time' },
    { german: 'Viertel nach fünf', english: 'quarter past five', category: 'Time' },
    { german: 'es ist halb acht', english: 'half past seven', category: 'Time' },

    // Days & Months
    { german: 'der Tag', english: 'day', category: 'Time' },
    { german: 'die Woche', english: 'week', category: 'Time' },
    { german: 'der Monat', english: 'month', category: 'Time' },
    { german: 'das Jahr', english: 'year', category: 'Time' },
    { german: 'das wochenende', english: 'weekend', category: 'Time' },
    { german: 'Montag', english: 'Monday', category: 'Days' },
    { german: 'Dienstag', english: 'Tuesday', category: 'Days' },
    { german: 'Mittwoch', english: 'Wednesday', category: 'Days' },
    { german: 'Donnerstag', english: 'Thursday', category: 'Days' },
    { german: 'Freitag', english: 'Friday', category: 'Days' },
    { german: 'Samstag', english: 'Saturday', category: 'Days' },
    { german: 'Sonntag', english: 'Sunday', category: 'Days' },
    { german: 'uns heute Abend', english: 'tonight', category: 'Time' },
    { german: 'uns heute Morgen', english: 'this morning', category: 'Time' },
    { german: 'uns um 12:00 Uhr', english: 'at 12:00 o\'clock', category: 'Time' },
    { german: 'uns nach dem Abendessen', english: 'after dinner', category: 'Time' },

    // Months
    { german: 'Januar', english: 'January', category: 'Months' },
    { german: 'Februar', english: 'February', category: 'Months' },
    { german: 'März', english: 'March', category: 'Months' },
    { german: 'April', english: 'April', category: 'Months' },
    { german: 'Mai', english: 'May', category: 'Months' },
    { german: 'Juni', english: 'June', category: 'Months' },
    { german: 'Juli', english: 'July', category: 'Months' },
    { german: 'August', english: 'August', category: 'Months' },
    { german: 'September', english: 'September', category: 'Months' },
    { german: 'Oktober', english: 'October', category: 'Months' },
    { german: 'November', english: 'November', category: 'Months' },
    { german: 'Dezember', english: 'December', category: 'Months' },

    // Numbers
    { german: 'eins', english: 'one', category: 'Numbers' },
    { german: 'zwei', english: 'two', category: 'Numbers' },
    { german: 'drei', english: 'three', category: 'Numbers' },
    { german: 'vier', english: 'four', category: 'Numbers' },
    { german: 'fünf', english: 'five', category: 'Numbers' },
    { german: 'sechs', english: 'six', category: 'Numbers' },
    { german: 'sieben', english: 'seven', category: 'Numbers' },
    { german: 'acht', english: 'eight', category: 'Numbers' },
    { german: 'neun', english: 'nine', category: 'Numbers' },
    { german: 'zehn', english: 'ten', category: 'Numbers' },
    { german: 'elf', english: 'eleven', category: 'Numbers' },
    { german: 'zwölf', english: 'twelve', category: 'Numbers' },
    { german: 'zwanzig', english: 'twenty', category: 'Numbers' },
    { german: 'dreißig', english: 'thirty', category: 'Numbers' },
    { german: 'vierzig', english: 'forty', category: 'Numbers' },
    { german: 'fünfzig', english: 'fifty', category: 'Numbers' },
    { german: 'hundert', english: 'one hundred', category: 'Numbers' },

    // Ordinal Numbers
    { german: 'erste', english: 'first', category: 'Ordinals' },
    { german: 'zweite', english: 'second', category: 'Ordinals' },
    { german: 'dritte', english: 'third', category: 'Ordinals' },
    { german: 'vierte', english: 'fourth', category: 'Ordinals' },
    { german: 'fünfte', english: 'fifth', category: 'Ordinals' },

    // Transportation
    { german: 'der Bahnhof', english: 'train station', category: 'Places' },
    { german: 'der Flughafen', english: 'airport', category: 'Places' },
    { german: 'der Bus', english: 'bus', category: 'Transportation' },
    { german: 'die U-Bahn', english: 'underground', category: 'Transportation' },
    { german: 'das Auto', english: 'car', category: 'Transportation' },
    { german: 'das Fahrrad', english: 'bicycle', category: 'Transportation' },
    { german: 'der Zug', english: 'train', category: 'Transportation' },
    { german: 'die Straßenbahn', english: 'tram', category: 'Transportation' },
    { german: 'das Flugzeug', english: 'airplane', category: 'Transportation' },
    { german: 'das Taxi', english: 'taxi', category: 'Transportation' },
    { german: 'das Schiff', english: 'ship / boat', category: 'Transportation' },
    { german: 'zu Fuß gehen', english: 'to go on foot / to walk', category: 'Transportation' },
    { german: 'die Fahrkarte', english: 'ticket', category: 'Transportation' },
    { german: 'die Haltestelle', english: 'stop / station (bus or tram)', category: 'Places' },
    { german: 'der Bahnsteig', english: 'platform', category: 'Places' },
    { german: 'das Gleis', english: 'track', category: 'Places' },
    { german: 'einsteigen', english: 'to get on / board', category: 'Transportation' },
    { german: 'aussteigen', english: 'to get off / exit', category: 'Transportation' },
    { german: 'umsteigen', english: 'to transfer / change trains', category: 'Transportation' },
    { german: 'fahren', english: 'to drive / to ride', category: 'Transportation' },
    { german: 'fliegen', english: 'to fly', category: 'Transportation' },

    // Directions
    { german: 'rechts', english: 'right', category: 'Directions' },
    { german: 'links', english: 'left', category: 'Directions' },
    { german: 'geradeaus', english: 'straight ahead', category: 'Directions' },
    { german: 'da drüben', english: 'over there', category: 'Directions' },
    { german: 'hier', english: 'here', category: 'Directions' },
    { german: 'da / dort', english: 'there', category: 'Directions' },
    { german: 'oben', english: 'up / upstairs', category: 'Directions' },
    { german: 'unten', english: 'down / downstairs', category: 'Directions' },
    { german: 'vorne', english: 'at the front', category: 'Directions' },
    { german: 'hinten', english: 'at the back', category: 'Directions' },
    { german: 'um die Ecke', english: 'around the corner', category: 'Directions' },
    { german: 'an der Ampel', english: 'at the traffic light', category: 'Directions' },
    { german: 'die erste Straße', english: 'the first street', category: 'Directions' },
    { german: 'abbiegen', english: 'to turn', category: 'Directions' },
    { german: 'nach Hause', english: 'towards home', category: 'Directions' },
    { german: 'zurück', english: 'back / return', category: 'Directions' },
    { german: 'weit', english: 'far', category: 'Directions' },
    { german: 'nah', english: 'near', category: 'Directions' },

    // Places
    { german: 'die Straße', english: 'street', category: 'Places' },
    { german: 'das Hotel', english: 'hotel', category: 'Places' },
    { german: 'die Stadt', english: 'city', category: 'Places' },
    { german: 'das Dorf', english: 'village', category: 'Places' },
    { german: 'die Haltestelle', english: 'stop', category: 'Places' },
    { german: 'die Schule', english: 'school', category: 'Education' },
    { german: 'die Universität', english: 'university', category: 'Education' },
    { german: 'das Büro', english: 'office', category: 'Work' },
    { german: 'das Museum', english: 'museum', category: 'Places' },
    { german: 'der Park', english: 'park', category: 'Places' },
    { german: 'die Bank', english: 'bank', category: 'Places' },
    { german: 'die Post', english: 'post office', category: 'Places' },
    { german: 'das Kino', english: 'cinema', category: 'Places' },
    { german: 'das Café', english: 'café', category: 'Places' },
    { german: 'das Restaurant', english: 'restaurant', category: 'Places' },
    { german: 'die Bibliothek', english: 'library', category: 'Places' },
    { german: 'der Supermarkt', english: 'supermarket', category: 'Places' },
    { german: 'das Geschäft', english: 'shop', category: 'Places' },
    { german: 'das Rathaus', english: 'town hall', category: 'Places' },

    // House & Home
    { german: 'das Haus', english: 'house', category: 'Home' },
    { german: 'die Wohnung', english: 'flat', category: 'Home' },
    { german: 'das Zimmer', english: 'room', category: 'Home' },
    { german: 'das Wohnzimmer', english: 'living room', category: 'Home' },
    { german: 'die Küche', english: 'kitchen', category: 'Home' },
    { german: 'das Badezimmer', english: 'bathroom', category: 'Home' },
    { german: 'das Bett', english: 'bed', category: 'Home' },
    { german: 'der Tisch', english: 'table', category: 'Home' },
    { german: 'der Stuhl', english: 'chair', category: 'Home' },
    { german: 'die Lampe', english: 'lamp', category: 'Home' },
    { german: 'der Fernseher', english: 'television', category: 'Home' },
    { german: 'das Fenster', english: 'window', category: 'Home' },
    { german: 'die Tür', english: 'door', category: 'Home' },
    { german: 'der Schrank', english: 'wardrobe', category: 'Home' },
    { german: 'die Wand', english: 'wall', category: 'Home' },
    { german: 'das Sofa', english: 'sofa', category: 'Home' },

    // Verbs
    { german: 'aufstehen', english: 'to get up', category: 'Verbs' },
    { german: 'frühstücken', english: 'to eat breakfast', category: 'Verbs' },
    { german: 'arbeiten', english: 'to work', category: 'Verbs' },
    { german: 'lernen', english: 'to study / learn', category: 'Verbs' },
    { german: 'essen', english: 'to eat', category: 'Verbs' },
    { german: 'trinken', english: 'to drink', category: 'Verbs' },
    { german: 'fernsehen', english: 'to watch TV', category: 'Verbs' },
    { german: 'schlafen', english: 'to sleep', category: 'Verbs' },
    { german: 'lesen', english: 'to read', category: 'Verbs' },
    { german: 'schreiben', english: 'to write', category: 'Verbs' },
    { german: 'sprechen', english: 'to speak', category: 'Verbs' },
    { german: 'gehen', english: 'to go', category: 'Verbs' },
    { german: 'kommen', english: 'to come', category: 'Verbs' },
    { german: 'fahren', english: 'to drive / travel', category: 'Verbs' },

    // W Frage
    { german: 'Wo', english: 'Where', category: 'W Frage' },
    { german: 'Woher', english: 'Where from', category: 'W Frage' },
    { german: 'Wohin', english: 'Where to', category: 'W Frage' },
    { german: 'Wann', english: 'When', category: 'W Frage' },
    { german: 'Warum', english: 'Why', category: 'W Frage' },
    { german: 'Wie', english: 'How', category: 'W Frage' },
    { german: 'Wie oft', english: 'How often', category: 'W Frage' },
    { german: 'Wie viel', english: 'How much', category: 'W Frage' },
    { german: 'Wie viele', english: 'How many', category: 'W Frage' },
    { german: 'Was', english: 'What', category: 'W Frage' },
    { german: 'Wer', english: 'Who', category: 'W Frage' },
    { german: 'Welche/r/s', english: 'Which', category: 'W Frage' },

    // Animals
    { german: 'der Hund', english: 'dog', category: 'Animals' },
    { german: 'die Katze', english: 'cat', category: 'Animals' },
    { german: 'das Pferd', english: 'horse', category: 'Animals' },
    { german: 'das Schwein', english: 'pig', category: 'Animals' },
    { german: 'die Kuh', english: 'cow', category: 'Animals' },
    { german: 'der Vogel', english: 'bird', category: 'Animals' },
    { german: 'der Fisch', english: 'fish', category: 'Animals' },
    { german: 'die Maus', english: 'mouse', category: 'Animals' },
    { german: 'das Kaninchen', english: 'rabbit', category: 'Animals' },
    { german: 'der Elefant', english: 'elephant', category: 'Animals' },
    { german: 'der Löwe', english: 'lion', category: 'Animals' },
    { german: 'die Schlange', english: 'snake', category: 'Animals' },
    { german: 'die Spinne', english: 'spider', category: 'Animals' },
    { german: 'die Biene', english: 'bee', category: 'Animals' },
    { german: 'die Ente', english: 'duck', category: 'Animals' },

    // Stationery
    { german: 'das Buch', english: 'book', category: 'Stationery' },
    { german: 'der Brief', english: 'letter', category: 'Stationery' },
    { german: 'die Postkarte', english: 'postcard', category: 'Stationery' },
    { german: 'der Stift', english: 'pen', category: 'Stationery' },
    { german: 'das Papier', english: 'paper', category: 'Stationery' },


    // Verb Akkusative
    { german: 'haben', english: 'to have', category: 'Accusative Verbs' },
    { german: 'brauchen', english: 'to need', category: 'Accusative Verbs' },
    { german: 'essen', english: 'to eat', category: 'Accusative Verbs' },
    { german: 'trinken', english: 'to drink', category: 'Accusative Verbs' },
    { german: 'sehen', english: 'to see', category: 'Accusative Verbs' },
    { german: 'hören', english: 'to hear', category: 'Accusative Verbs' },
    { german: 'kaufen', english: 'to buy', category: 'Accusative Verbs' },
    { german: 'bestellen', english: 'to order', category: 'Accusative Verbs' },
    { german: 'suchen', english: 'to look for', category: 'Accusative Verbs' },
    { german: 'finden', english: 'to find', category: 'Accusative Verbs' },
    { german: 'kochen', english: 'to cook', category: 'Accusative Verbs' },
    { german: 'verstehen', english: 'to understand', category: 'Accusative Verbs' },
    { german: 'besuchen', english: 'to visit', category: 'Accusative Verbs' },
    { german: 'anrufen', english: 'to call (on phone)', category: 'Accusative Verbs' },
    { german: 'schreiben', english: 'to write', category: 'Accusative Verbs' },

    // Dative
    { german: 'helfen', english: 'to help', category: 'Dative Verbs' },
    { german: 'danken', english: 'to thank', category: 'Dative Verbs' },
    { german: 'gefallen', english: 'to please / to like', category: 'Dative Verbs' },
    { german: 'gehören', english: 'to belong to', category: 'Dative Verbs' },
    { german: 'gratulieren', english: 'to congratulate', category: 'Dative Verbs' },
    { german: 'passen', english: 'to fit', category: 'Dative Verbs' },
    { german: 'antworten', english: 'to answer', category: 'Dative Verbs' },
    { german: 'zuhören', english: 'to listen to', category: 'Dative Verbs' },
    { german: 'schmecken', english: 'to taste (good) to', category: 'Dative Verbs' },
    { german: 'glauben', english: 'to believe', category: 'Dative Verbs' },
    { german: 'vertrauen', english: 'to trust', category: 'Dative Verbs' },
    { german: 'verzeihen', english: 'to forgive', category: 'Dative Verbs' },
    { german: 'wehtun', english: 'to hurt', category: 'Dative Verbs' },
    { german: 'folgen', english: 'to follow', category: 'Dative Verbs' },
    { german: 'passieren', english: 'to happen to', category: 'Dative Verbs' },

    // Weather
    { german: 'das Wetter', english: 'weather', category: 'Weather' },
    { german: 'die Sonne', english: 'sun', category: 'Weather' },
    { german: 'der Regen', english: 'rain', category: 'Weather' },
    { german: 'der Schnee', english: 'snow', category: 'Weather' },
    { german: 'der Wind', english: 'wind', category: 'Weather' },
    { german: 'warm', english: 'warm', category: 'Weather' },
    { german: 'kalt', english: 'cold', category: 'Weather' },
    { german: 'heiß', english: 'hot', category: 'Weather' },
    { german: 'kühl', english: 'cool', category: 'Weather' },
    { german: 'bewölkt', english: 'cloudy', category: 'Weather' },
    { german: 'neblig', english: 'foggy', category: 'Weather' },

    // Vacation
    { german: 'der Urlaub', english: 'vacation', category: 'Vacation' },

    // Prepositions
    { german: 'auf', english: 'on', category: 'Prepositions' },
    { german: 'an', english: 'at', category: 'Prepositions' },
    { german: 'ab', english: 'from - Dativ', category: 'Prepositions' },
    { german: 'bei', english: 'at - Dativ', category: 'Prepositions' },
    { german: 'durch', english: 'through - Akku', category: 'Prepositions' },
    { german: 'im', english: 'in', category: 'Prepositions' },
    { german: 'in', english: 'in', category: 'Prepositions' },
    { german: 'mit', english: 'with - Dativ', category: 'Prepositions' },
    { german: 'nach', english: 'after - Dativ', category: 'Prepositions' },
    { german: 'unter', english: 'under', category: 'Prepositions' },
    { german: 'zu', english: 'to - Dativ', category: 'Prepositions' },
    { german: 'hinter', english: 'behind', category: 'Prepositions' },
    { german: 'vor', english: 'before', category: 'Prepositions' },
    { german: 'ohne', english: 'without - Akku', category: 'Prepositions' },
    { german: 'mit', english: 'with', category: 'Prepositions' },
    { german: 'außer', english: 'except - Dativ', category: 'Prepositions' },
    { german: 'um', english: 'around - Akku', category: 'Prepositions' },
    { german: 'gegen', english: 'against - Akku', category: 'Prepositions' },
    { german: 'gegenüber', english: 'in front of - Dativ', category: 'Prepositions' },
    { german: 'Nach', english: 'after', category: 'Prepositions' },
    { german: 'aus', english: 'from - Dativ', category: 'Prepositions' },
    { german: 'von', english: 'from - Dativ', category: 'Prepositions' },
    { german: 'seit', english: 'since (for) - Dativ', category: 'Prepositions' },
    { german: 'nebe', english: 'beside', category: 'Prepositions' },
    { german: 'zwischen', english: 'between', category: 'Prepositions' },
    { german: 'für', english: 'for - Akku', category: 'Prepositions' },
    { german: 'bis', english: 'until - Akku', category: 'Prepositions' },

    // Health
    { german: 'der Arzt / die Ärztin', english: 'doctor', category: 'Health' },
    { german: 'der Zahnarzt / die Zahnärztin', english: 'dentist', category: 'Health' },
    { german: 'das Krankenhaus', english: 'hospital', category: 'Health' },
    { german: 'die Apotheke', english: 'pharmacy', category: 'Health' },
    { german: 'das Rezept', english: 'prescription', category: 'Health' },
    { german: 'die Tablette', english: 'tablet', category: 'Health' },
    { german: 'der Schmerz', english: 'pain', category: 'Health' },
    { german: 'das Fieber', english: 'fever', category: 'Health' },
    { german: 'die Erkältung', english: 'cold', category: 'Health' },
    { german: 'der Husten', english: 'cough', category: 'Health' },

    // Body Parts
    { german: 'der Kopf', english: 'head', category: 'Body' },
    { german: 'die Hand', english: 'hand', category: 'Body' },
    { german: 'der Arm', english: 'arm', category: 'Body' },
    { german: 'das Bein', english: 'leg', category: 'Body' },
    { german: 'der Rücken', english: 'back', category: 'Body' },
    { german: 'die Nase', english: 'nose', category: 'Body' },
    { german: 'der Mund', english: 'mouth', category: 'Body' },
    { german: 'das Auge', english: 'eye', category: 'Body' },
    { german: 'der Fuß', english: 'foot', category: 'Body' },
    { german: 'das Herz', english: 'heart', category: 'Body' },

    // Adjectives
    { german: 'groß', english: 'big / tall', category: 'Adjectives' },
    { german: 'klein', english: 'small / short', category: 'Adjectives' },
    { german: 'schön', english: 'beautiful', category: 'Adjectives' },
    { german: 'hässlich', english: 'ugly', category: 'Adjectives' },
    { german: 'alt', english: 'old', category: 'Adjectives' },
    { german: 'jung', english: 'young', category: 'Adjectives' },
    { german: 'neu', english: 'new', category: 'Adjectives' },
    { german: 'gut', english: 'good', category: 'Adjectives' },
    { german: 'schlecht', english: 'bad', category: 'Adjectives' },
    { german: 'freundlich', english: 'friendly', category: 'Adjectives' },
    { german: 'teuer', english: 'expensive', category: 'Adjectives' },
    { german: 'billig', english: 'cheap', category: 'Adjectives' },
    { german: 'einfach', english: 'easy', category: 'Adjectives' },
    { german: 'schwer', english: 'difficult', category: 'Adjectives' },
    { german: 'ruhig', english: 'quiet', category: 'Adjectives' },
    { german: 'laut', english: 'loud', category: 'Adjectives' },
    { german: 'sauber', english: 'clean', category: 'Adjectives' },
    { german: 'schmutzig', english: 'dirty', category: 'Adjectives' },
    { german: 'nett', english: 'nice', category: 'Adjectives' },
    { german: 'langweilig', english: 'boring', category: 'Adjectives' },
    { german: 'interessant', english: 'interesting', category: 'Adjectives' },
    { german: 'lecker', english: 'tasty', category: 'Adjectives' },
    { german: 'müde', english: 'tired', category: 'Adjectives' },
    { german: 'gesund', english: 'healthy', category: 'Adjectives' },
    { german: 'krank', english: 'sick', category: 'Adjectives' },

    // Hobbies
    { german: 'die Zeitung', english: 'newspaper', category: 'Hobbies' },
    { german: 'das Buch', english: 'book', category: 'Hobbies' },
    { german: 'der Film', english: 'movie', category: 'Hobbies' },
    { german: 'das Spiel', english: 'game', category: 'Hobbies' },
    { german: 'der Sport', english: 'sport', category: 'Hobbies' },
    { german: 'die Musik', english: 'music', category: 'Hobbies' },
    { german: 'die Fotografie', english: 'photography', category: 'Hobbies' },
    { german: 'das Fitnessstudio', english: 'gym', category: 'Hobbies' },
    { german: 'der Fußball', english: 'football', category: 'Hobbies' },

];

const Page = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(VOCABULARY.map((v) => v.category))];

    const filteredVocab = useMemo(() => {
        return VOCABULARY.filter((item) => {
            const matchesSearch =
                item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.english.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === 'All' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const currentCard = filteredVocab[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev + 1 < filteredVocab.length ? prev + 1 : 0
        );
        setIsFlipped(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev - 1 >= 0 ? prev - 1 : filteredVocab.length - 1
        );
        setIsFlipped(false);
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setSearchTerm('');
        setSelectedCategory('All');
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 pt-20 pb-12">
                {/* Header */}
                {/* <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-2 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        German Vocabulary
                    </h1>
                    <p className="text-slate-400 text-lg">Master essential German words</p>
                </div> */}

                {/* Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search words..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentIndex(0);
                                setIsFlipped(false);
                            }}
                            className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">

                        <div className="flex gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setCurrentIndex(0);
                                        setIsFlipped(false);
                                    }}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${selectedCategory === cat
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Flashcard */}
                {filteredVocab.length > 0 ? (
                    <>
                        <div
                            onClick={() => setIsFlipped(!isFlipped)}
                            className="mb-8 cursor-pointer"
                        >
                            <div className="relative w-full h-96 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105">
                                {/* Front side - German */}
                                {!isFlipped && (
                                    <div className="text-center animate-fadeIn">
                                        <p className="text-slate-200 text-sm font-medium mb-4 opacity-75">
                                            German
                                        </p>
                                        <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
                                            {currentCard?.german}
                                        </h2>
                                        <p className="text-blue-100 text-sm opacity-75">
                                            Click to reveal English
                                        </p>
                                    </div>
                                )}

                                {/* Back side - English */}
                                {isFlipped && (
                                    <div className="text-center animate-fadeIn">
                                        <p className="text-slate-200 text-sm font-medium mb-4 opacity-75">
                                            English
                                        </p>
                                        <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
                                            {currentCard?.english}
                                        </h2>
                                        <p className="text-blue-100 text-sm opacity-75">
                                            Click to see German
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <style jsx>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              .animate-fadeIn {
                animation: fadeIn 0.3s ease-in;
              }
            `}</style>

                        {/* Progress and Navigation */}
                        <div className="flex flex-col items-center gap-6">
                            {/* Progress indicator */}
                            <div className="w-full max-w-xs">
                                <div className="flex justify-between text-sm text-slate-400 mb-2">
                                    <span>Progress</span>
                                    <span>
                                        {currentIndex + 1} / {filteredVocab.length}
                                    </span>
                                </div>
                                <div className="w-full bg-slate-700/50 rounded-full h-2">
                                    <div
                                        className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                        style={{
                                            width: `${((currentIndex + 1) / filteredVocab.length) * 100
                                                }%`,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Navigation buttons */}
                            <div className="flex gap-4 items-center">
                                <button
                                    onClick={handlePrev}
                                    className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition text-white"
                                    aria-label="Previous card"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>

                                <button
                                    onClick={handleReset}
                                    className="px-6 py-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition text-white flex items-center gap-2 font-medium"
                                >
                                    <RotateCw className="h-4 w-4" />
                                    Reset
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition text-white"
                                    aria-label="Next card"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Category badge */}
                            <div className="text-sm text-slate-400">
                                Category:{' '}
                                <span className="text-blue-400 font-medium">
                                    {currentCard?.category}
                                </span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-lg">No words found matching your search.</p>
                        <button
                            onClick={handleReset}
                            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page