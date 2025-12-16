import data from "../../../content/data";


const TextDivider = ({ text }) => {
    const words = text.split(' ');
    const chunkSize = 5;
    const dividedParagraphs = [];

    for (let i = 0; i < words.length; i += chunkSize) {
        const chunk = words.slice(i, i + chunkSize);

        dividedParagraphs.push(chunk.join(' '));
    }

    return (
        <div className="text-divider-container">
            {dividedParagraphs.map((paragraph, index) => (
                <p key={index} className="word-row">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

const Test = () => (
    <div>
        <h2>Text Divided by 10 Words Per Row</h2>
        <TextDivider text={data[0].it.summary} />
    </div>
);

export default Test;