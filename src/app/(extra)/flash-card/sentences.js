const Sentences = [
    { id: 1, level: 'A2S', german: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten und ein neues Leben beginnen möchte.', english: '', category: '' },
    { id: 2, level: 'A2S', german: 'Ich bin gestern spät nach Hause gekommen, weil der Bus Verspätung hatte.', english: '', category: '' },
    { id: 3, level: 'A2S', german: 'Ich glaube, dass regelmäßiges Üben mir wirklich hilft, besser zu sprechen.', english: '', category: '' },
    { id: 4, level: 'A2S', german: 'Kannst du mir sagen, wo ich eine günstige Wohnung finden kann?', english: '', category: '' },
    { id: 5, level: 'A2S', german: 'Ich habe gestern lange gearbeitet, deshalb bin ich heute sehr müde.', english: '', category: '' },
    { id: 6, level: 'A2S', german: 'Wenn das Wetter schön ist, gehe ich gern mit meinen Freunden spazieren.', english: '', category: '' },
    { id: 7, level: 'A2S', german: 'Ich habe keine Zeit für einen langen Einkauf, weil ich gleich arbeiten muss.', english: '', category: '' },
    { id: 8, level: 'A2S', german: 'Ich esse selten Süßigkeiten, weil ich gesünder leben möchte.', english: '', category: '' },
    { id: 9, level: 'A2S', german: 'Ich versuche, jeden Tag ein bisschen zu lesen, auch wenn ich müde bin.', english: '', category: '' },
    { id: 10, level: 'A2S', german: 'Ich gehe früh schlafen, damit ich morgen nicht verschlafe.', english: '', category: '' },
    { id: 11, level: 'A2S', german: 'Kannst du mir erklären, warum die App nicht funktioniert?', english: '', category: '' },
    { id: 12, level: 'A2S', german: 'Ich wohne gern in dieser Stadt, obwohl sie manchmal sehr laut ist.', english: '', category: '' },
    { id: 13, level: 'A2S', german: 'Ich finde es schwierig, am Telefon Deutsch zu sprechen.', english: '', category: '' },
    { id: 14, level: 'A2S', german: 'Ich möchte wissen, wie lange die Bearbeitung meines Antrags dauert.', english: '', category: '' },
    { id: 15, level: 'A2S', german: 'Ich habe gestern eine Nachricht geschrieben, aber niemand hat geantwortet.', english: '', category: '' },
    { id: 16, level: 'A2S', german: 'Ich würde gern mehr Deutsch sprechen, aber ich habe nicht viele Gelegenheiten.', english: '', category: '' },
    { id: 17, level: 'A2S', german: 'Ich gehe zum Arzt, weil ich seit drei Tagen Rückenschmerzen habe.', english: '', category: '' },
    { id: 18, level: 'A2S', german: 'Kannst du mir zeigen, wie ich diesen Satz richtig ausspreche?', english: '', category: '' },
    { id: 19, level: 'A2S', german: 'In Deutschland ist es wichtig, pünktlich zu sein.', english: '', category: '' },
    { id: 20, level: 'A2S', german: 'Ich kann heute nicht kommen, weil ich einen wichtigen Termin habe.', english: '', category: '' },
    { id: 21, level: 'A2S', german: 'Ich habe gestern viel gelernt, deshalb brauche ich heute eine Pause.', english: '', category: '' },
    { id: 22, level: 'A2S', german: 'Wenn ich Zeit habe, koche ich gern etwas Neues.', english: '', category: '' },
    { id: 23, level: 'A2S', german: 'Ich möchte wissen, ob Sie mir eine Liste der Unterlagen schicken können.', english: '', category: '' },
    { id: 24, level: 'A2S', german: 'Ich möchte wissen, wie ich dieses Problem lösen soll.', english: '', category: '' },
    { id: 25, level: 'A2S', german: 'Ich bin gestern früh aufgestanden, weil ich einen Zug nehmen musste.', english: '', category: '' },
    { id: 26, level: 'A2S', german: 'Ich möchte später studieren, deshalb brauche ich ein gutes Sprachniveau.', english: '', category: '' },
    { id: 27, level: 'A2S', german: 'Ich habe gehört, dieser Deutschkurs soll sehr nützlich sein.', english: '', category: '' },
    { id: 28, level: 'A2S', german: 'Kannst du mir sagen, warum mein Paket noch nicht angekommen ist?', english: '', category: '' },
    { id: 29, level: 'A2S', german: 'Obwohl ich müde bin, gehe ich jetzt einkaufen.', english: '', category: '' },
    { id: 30, level: 'A2S', german: 'Ich brauche ein Dokument, das zeigt, dass ich hier wohne.', english: '', category: '' },
    { id: 31, level: 'A2S', german: 'Ich möchte wissen, ob Sie mir in dieser Angelegenheit helfen können.', english: '', category: '' },
    { id: 32, level: 'A2S', german: 'Ich habe gestern meine Tasche vergessen, aber zum Glück hat sie jemand gefunden.', english: '', category: '' },
    { id: 33, level: 'A2S', german: 'Wenn du möchtest, können wir zusammen üben.', english: '', category: '' },
    { id: 34, level: 'A2S', german: 'Ich habe meinen Schlüssel verloren, deshalb komme ich später.', english: '', category: '' },
    { id: 35, level: 'A2S', german: 'Ich finde es schwer, neue Leute kennenzulernen.', english: '', category: '' },
    { id: 36, level: 'A2S', german: 'Ich möchte Deutsch lernen.', english: '', category: '' },
    { id: 37, level: 'A2S', german: 'Ich muss heute viele E-Mails schreiben, weil ich gestern keine Zeit hatte.', english: '', category: '' },
    { id: 38, level: 'A2S', german: 'Ich habe Angst, dass ich etwas falsch mache.', english: '', category: '' },
    { id: 39, level: 'A2S', german: 'Obwohl es regnet, gehe ich jetzt zur Arbeit.', english: '', category: '' },
    { id: 40, level: 'A2S', german: 'Ich hätte gern einen Termin, weil ich eine wichtige Frage habe.', english: '', category: '' },
    { id: 41, level: 'A2S', german: 'Ich suche eine Wohnung, die nicht zu teuer ist.', english: '', category: '' },
    { id: 42, level: 'A2S', german: 'Ich hoffe, dass ich bald besser Deutsch sprechen kann.', english: '', category: '' },
    { id: 43, level: 'A2S', german: 'Ich möchte später eine Ausbildung machen, deshalb lerne ich jetzt fleißig.', english: '', category: '' },
    { id: 44, level: 'A2S', german: 'Ich möchte wissen, ob ich die Unterlagen persönlich abgeben muss oder ob es auch per E-Mail geht.', english: '', category: '' },
    { id: 45, level: 'A2S', german: 'Ich bin heute zu spät gekommen, weil der Verkehr wirklich schlimm war.', english: '', category: '' },
    { id: 46, level: 'A2S', german: 'Wenn du Zeit hast, können wir später zusammen die Hausaufgaben machen.', english: '', category: '' },
    { id: 47, level: 'A2S', german: 'Ich habe eine neue Brille gekauft, weil ich ohne sie schlecht sehe.', english: '', category: '' },
    { id: 48, level: 'A2S', german: 'Ich finde es wichtig, dass man in Deutschland viele Regeln kennt.', english: '', category: '' },
    { id: 49, level: 'A2S', german: 'Obwohl ich heute frei habe, muss ich viel im Haushalt machen.', english: '', category: '' },
    { id: 50, level: 'A2S', german: 'Ich habe gehört, dass man für dieses Formular einen extra Termin braucht.', english: '', category: '' },
    { id: 51, level: 'A2S', german: 'Kannst du mir zeigen, wie ich diese Übung richtig lösen kann?', english: '', category: '' },
    { id: 52, level: 'A2S', german: 'Ich habe gestern lange geschlafen, weil ich die ganze Woche müde war.', english: '', category: '' },
    { id: 53, level: 'A2S', german: 'Wenn das Paket heute nicht kommt, rufe ich morgen beim Kundenservice an.', english: '', category: '' },
    { id: 54, level: 'A2S', german: 'Ich habe meinen Freund eingeladen, weil ich heute etwas Neues kochen möchte.', english: '', category: '' },
    { id: 55, level: 'A2S', german: 'Ich brauche eine Wohnung, die nah an meinem Arbeitsplatz liegt.', english: '', category: '' },
    { id: 56, level: 'A2S', german: 'Ich habe mein Handy vergessen, deshalb konnte ich dich nicht anrufen.', english: '', category: '' },
    { id: 57, level: 'A2S', german: 'Ich würde gern mehr Sport machen, aber ich finde nicht genug Zeit.', english: '', category: '' },
    { id: 58, level: 'A2S', german: 'Kannst du mir sagen, warum ich diese Aufgabe falsch gemacht habe?', english: '', category: '' },
    { id: 59, level: 'A2S', german: 'Ich gehe heute früh ins Bett, damit ich morgen fit bin.', english: '', category: '' },
    { id: 60, level: 'A2S', german: 'Ich habe gemerkt, dass ich besser lerne, wenn ich in Ruhe bin.', english: '', category: '' },
    { id: 61, level: 'A2S', german: 'Obwohl ich viel geübt habe, fällt mir das Sprechen noch schwer.', english: '', category: '' },
    { id: 62, level: 'A2S', german: 'Ich möchte wissen, ob der Kurs im Sommer weitergeht oder nicht.', english: '', category: '' },
    { id: 63, level: 'A2S', german: 'Ich habe gestern das Bad geputzt, weil es wirklich nötig war.', english: '', category: '' },
    { id: 64, level: 'A2S', german: 'Wenn du möchtest, kann ich dir später beim Lernen helfen.', english: '', category: '' },
    { id: 65, level: 'A2S', german: 'Ich habe keine Lust zu kochen, deshalb bestelle ich heute etwas zu essen.', english: '', category: '' },
    { id: 66, level: 'A2S', german: 'Ich fand den Film interessant, obwohl ich nicht alles verstanden habe.', english: '', category: '' },
    { id: 67, level: 'A2S', german: 'Ich möchte wissen, ob ich für die Anmeldung noch andere Dokumente brauche.', english: '', category: '' },
    { id: 68, level: 'A2S', german: 'Ich habe gestern einen langen Spaziergang gemacht, weil das Wetter so schön war.', english: '', category: '' },
    { id: 69, level: 'A2S', german: 'Wenn ich mehr Geld hätte, würde ich gerne viel reisen.', english: '', category: '' },
    { id: 70, level: 'A2S', german: 'Ich habe bemerkt, dass meine Aussprache langsam besser wird.', english: '', category: '' },
    { id: 71, level: 'A2S', german: 'Ich möchte wissen, wie ich mich online registrieren kann.', english: '', category: '' },
    { id: 72, level: 'A2S', german: 'Ich bleibe heute zu Hause, obwohl ich eigentlich viel zu erledigen habe.', english: '', category: '' },
    { id: 73, level: 'A2S', german: 'Ich habe eine E-Mail bekommen, dass mein Termin verschoben wurde.', english: '', category: '' },
    { id: 74, level: 'A2S', german: 'Wenn ich müde bin, kann ich mich nicht gut konzentrieren.', english: '', category: '' },
    { id: 75, level: 'A2S', german: 'Ich möchte ein Fahrrad kaufen, das leicht und nicht zu teuer ist.', english: '', category: '' },
    { id: 76, level: 'A2S', german: 'Ich war gestern zu Hause, weil ich mich nicht gut gefühlt habe.', english: '', category: '' },
    { id: 77, level: 'A2S', german: 'Ich finde es schwer, neue Wörter zu behalten, wenn ich sie nicht oft benutze.', english: '', category: '' },
    { id: 78, level: 'A2S', german: 'Ich habe gehört, dass die Miete in dieser Gegend sehr hoch ist.', english: '', category: '' },
    { id: 79, level: 'A2S', german: 'Wenn das Wetter morgen gut ist, machen wir einen Ausflug.', english: '', category: '' },
    { id: 80, level: 'A2S', german: 'Ich habe vergessen dir zurückzuschreiben, weil ich gestern viel Stress hatte.', english: '', category: '' },
    { id: 81, level: 'A2S', german: 'Ich brauche eine Tasche, die groß genug für meinen Laptop ist.', english: '', category: '' },
    { id: 82, level: 'A2S', german: 'Ich kann heute nicht lange bleiben, weil ich noch andere Termine habe.', english: '', category: '' },
    { id: 83, level: 'A2S', german: 'Ich gehe ins Fitnessstudio, um gesund und fit zu bleiben.', english: '', category: '' },
    { id: 84, level: 'A2S', german: 'Ich habe gestern viel gekocht, deshalb muss ich heute nicht kochen.', english: '', category: '' },
    { id: 85, level: 'A2S', german: 'Obwohl ich wenig Zeit habe, versuche ich jeden Tag zu üben.', english: '', category: '' },
    { id: 86, level: 'A2S', german: 'Ich möchte wissen, ob Sie nächste Woche freie Termine haben.', english: '', category: '' },
    { id: 87, level: 'A2S', german: 'Ich habe dieses Buch gekauft, weil ich mein Deutsch verbessern möchte.', english: '', category: '' },
    { id: 88, level: 'A2S', german: 'Er spricht gut Deutsch und Englisch.', english: '', category: '' },
    { id: 89, level: 'A2S', german: 'Ich möchte nächste Woche reisen, obwohl ich eigentlich viel Arbeit habe.', english: '', category: '' },
    { id: 90, level: 'A2S', german: 'Ich habe gestern viele E-Mails bekommen, deshalb bin ich nicht mit allem fertig geworden.', english: '', category: '' },
    { id: 91, level: 'A2S', german: 'Wenn du möchtest, kann ich dich morgen zum Amt begleiten.', english: '', category: '' },
    { id: 92, level: 'A2S', german: 'Ich habe meine Krankenkarte nicht gefunden, deshalb konnte ich nicht zum Arzt gehen.', english: '', category: '' },
    { id: 93, level: 'A2S', german: 'Kannst du mir sagen, wie hoch die Monatsmiete inklusive Nebenkosten ist?', english: '', category: '' },
    { id: 94, level: 'A2S', german: 'Ich habe vergessen die Rechnung zu bezahlen, deshalb muss ich es heute dringend machen.', english: '', category: '' },
    { id: 95, level: 'A2S', german: 'Ich möchte wissen, ob ich noch andere Unterlagen für die Verlängerung brauche.', english: '', category: '' },
    { id: 96, level: 'A2S', german: 'Ich habe gestern einen Brief vom Amt bekommen, aber ich verstehe ihn nicht so gut.', english: '', category: '' },
    { id: 97, level: 'A2S', german: 'Wenn du Hilfe brauchst, sag einfach Bescheid, ich helfe dir gern.', english: '', category: '' },
    { id: 98, level: 'A2S', german: 'Ich habe gehört, dass der Kurs nächste Woche nicht stattfindet. Stimmt das?', english: '', category: '' },
    { id: 99, level: 'A2S', german: 'Ich esse heute etwas Einfaches, weil ich keine Zeit zum Kochen habe.', english: '', category: '' },
    { id: 100, level: 'A2S', german: 'Ich habe viele neue Wörter gelernt, aber ich muss sie noch üben.', english: '', category: '' },
    { id: 101, level: 'A2S', german: 'Obwohl es sehr kalt ist, muss ich heute zu Fuß zur Arbeit gehen.', english: '', category: '' },
    { id: 102, level: 'A2S', german: 'Ich konnte die Datei nicht hochladen, weil mein Internet sehr langsam war.', english: '', category: '' },
    { id: 103, level: 'A2S', german: 'Ich gehe jetzt einkaufen, weil ich fast nichts mehr im Kühlschrank habe.', english: '', category: '' },
    { id: 104, level: 'A2S', german: 'Wenn wir Zeit haben, können wir zusammen für die Prüfung lernen.', english: '', category: '' },
    { id: 105, level: 'A2S', german: 'Ich brauche einen Arzttermin, weil meine Kopfschmerzen nicht besser werden.', english: '', category: '' },
    { id: 106, level: 'A2S', german: 'Ich habe lange telefonierte, deshalb konnte ich nicht früher schlafen.', english: '', category: '' },
    { id: 107, level: 'A2S', german: 'Ich finde es schwer, Formulare zu verstehen, obwohl sie eigentlich einfach sein sollten.', english: '', category: '' },
    { id: 108, level: 'A2S', german: 'Ich würde gern wissen, ob Sie meine Bewerbung erhalten haben.', english: '', category: '' },
    { id: 109, level: 'A2S', german: 'Ich habe keine Lust zu kochen, deshalb bestelle ich heute etwas zum Essen.', english: '', category: '' },
    { id: 110, level: 'A2S', german: 'Ich habe mein Portemonnaie verloren, aber zum Glück hatte ich nur wenig Geld dabei.', english: '', category: '' },
    { id: 111, level: 'A2S', german: 'Wenn das Wetter morgen schlecht ist, bleiben wir zu Hause.', english: '', category: '' },
    { id: 112, level: 'A2S', german: 'Ich möchte wissen, ob das Büro am Freitag geöffnet ist.', english: '', category: '' },
    { id: 113, level: 'A2S', german: 'Ich habe gestern viel geübt, deshalb fühle ich mich heute sicherer.', english: '', category: '' },
    { id: 114, level: 'A2S', german: 'Obwohl ich keinen großen Hunger habe, esse ich etwas, damit es mir besser geht.', english: '', category: '' },
    { id: 115, level: 'A2S', german: 'Ich brauche ein Dokument, das bestätigt, dass ich Student bin.', english: '', category: '' },
    { id: 116, level: 'A2S', german: 'Wenn du möchtest, können wir am Wochenende zusammen kochen.', english: '', category: '' },
    { id: 117, level: 'A2S', german: 'Ich habe gehört, dass die Miete ab nächstem Jahr steigt.', english: '', category: '' },
    { id: 118, level: 'A2S', german: 'Ich habe gestern ein neues Rezept ausprobiert und es hat sehr gut geschmeckt.', english: '', category: '' },
    { id: 119, level: 'A2S', german: 'Ich möchte wissen, wie ich meine Adresse offiziell ändern kann.', english: '', category: '' },
    { id: 120, level: 'A2S', german: 'Ich habe kein Bargeld dabei, deshalb muss ich mit Karte bezahlen.', english: '', category: '' },
    { id: 121, level: 'A2S', german: 'Ich habe gestern versucht den Kundenservice zu erreichen, aber niemand hat geantwortet.', english: '', category: '' },
    { id: 122, level: 'A2S', german: 'Ich gehe früher nach Hause, weil ich mich nicht gut fühle.', english: '', category: '' },
]

export default Sentences






































































































